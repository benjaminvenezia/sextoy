import styled from 'styled-components'
import { QuestionContainer } from '../components'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = () => {
  const [question, setQuestion] = useState()

  const fetchData = async () => {
    const { data } = await axios.get(`/api/v1/question`)
    setQuestion(data)
  }

  useEffect(() => {
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
