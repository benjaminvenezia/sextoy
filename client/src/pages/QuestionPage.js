import styled from 'styled-components'
import { QuestionContainer } from '../components'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = () => {
  const [question, setQuestion] = useState()

  useEffect(() => {
    axios.get(`http://localhost:5004/api/v1/`).then((res) => {
      const quest = res.data
      setQuestion(quest)
    })
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
