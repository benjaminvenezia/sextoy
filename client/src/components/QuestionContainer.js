import styled from 'styled-components'
import { Question, SextoyCategory, Spinner } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionContainer = ({
  setQuestion,
  question,
  firstQuestion,
  setFirstQuestion,
}) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])
  const [isOver, setIsOver] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  let url = `/api/v1/question/tags?tags=${tagsNextQuestion.join(', ')}`

  const handleClick = (tags) => {
    setFirstQuestion(null)
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
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData(url)
  }, [tagsNextQuestion, isOver])

  return (
    <Wrapper>
      {!isOver ? (
        isLoading ? (
          <Spinner />
        ) : (
          <Question
            question={firstQuestion ? firstQuestion : question}
            handleClick={handleClick}
          />
        )
      ) : (
        <SextoyCategory tagsNextQuestion={tagsNextQuestion} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    color: var(--primary);
  }

  background-color: black;
  border-radius: 2.5rem;
  width: 95%;
  text-align: center;
  margin-top: 50px;
`

export default QuestionContainer
