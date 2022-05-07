import styled from 'styled-components'
import { QuestionContainer } from '../components'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = () => {
  const [question, setQuestion] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/v1/question`)
      setQuestion(response.data)
    }

    fetchData()
  }, [])

  return (
    <Wrapper>
      <QuestionContainer question={question} setQuestion={setQuestion} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`

export default QuestionPage
