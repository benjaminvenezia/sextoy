import styled from 'styled-components'
import { Question } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionContainer = () => {
  const [question, setQuestion] = useState()
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])
  let url = `http://localhost:5004/api/v1/tags?tags=${tagsNextQuestion.join(', ')}`

  useEffect(() => {
    axios.get(`http://localhost:5004/api/v1/`).then((res) => {
      const questions = res.data
      setQuestion(questions)
    })
  }, [])

  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })

    console.log(url)
    console.log(tagsNextQuestion)
  }

  useEffect(() => {
    callApi(url)
  }, [tagsNextQuestion])

  const callApi = (url) => {
    axios.get(url).then((res) => {
      const question = res.data
      setQuestion(question)
    })
  }

  return (
    <Wrapper>
      <Question question={question} handleClick={handleClick} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  margin: 100px auto;
`

export default QuestionContainer
