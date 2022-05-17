import styled from 'styled-components'
import { QuestionContainer } from '../components'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = () => {
  const [question, setQuestion] = useState()
  const [firstQuestion, setFirstQuestion] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/v1/question`)
        setFirstQuestion(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    setFirstQuestion(null)
  }, [])

  return (
    <Wrapper>
      <QuestionContainer
        firstQuestion={firstQuestion}
        setFirstQuestion={setFirstQuestion}
        question={question}
        setQuestion={setQuestion}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default QuestionPage
