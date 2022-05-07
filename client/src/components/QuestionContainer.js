import styled from 'styled-components'
import { Question, SextoyCategory } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionContainer = ({ setQuestion, question }) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])
  const [isOver, setIsOver] = useState(false)

  let url = `http://localhost:5004/api/v1/question/tags?tags=${tagsNextQuestion.join(
    ', '
  )}`

  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })
  }

  const fetchData = async (url) => {
    const response = await axios.get(url)

    const id = response.data.questions[0]?._id

    if (tagsNextQuestion.length > 1 && !id) {
      setIsOver(true)
    }

    setQuestion(response.data)
  }

  useEffect(() => {
    fetchData(url)
  }, [tagsNextQuestion, isOver])

  return (
    <Wrapper>
      {!isOver ? (
        <Question question={question} handleClick={handleClick} />
      ) : (
        <SextoyCategory tagsNextQuestion={tagsNextQuestion} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 2.5rem;
  width: 50%;
  margin: 100px auto;
`

export default QuestionContainer
