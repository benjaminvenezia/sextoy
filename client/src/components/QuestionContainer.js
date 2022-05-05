import styled from 'styled-components'
import { Question } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionContainer = ({ setQuestion, question }) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])
  const [isOver, setIsOver] = useState(false)

  let url = `http://localhost:5004/api/v1/tags?tags=${tagsNextQuestion.join(', ')}`

  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })

    console.log(url)
    console.log(tagsNextQuestion)
  }

  const fetchData = async (url) => {
    const response = await axios.get(url)
    setQuestion(response.data)
  }

  useEffect(() => {
    fetchData(url)
  }, [tagsNextQuestion])

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
