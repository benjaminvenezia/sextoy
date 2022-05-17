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
  margin: 0 auto;
  background-color: transparent;
  border-radius: 2.5rem;
  width: 98%;
  text-align: center;
  margin-top: 117px;

  @media (max-width: 992px) {
    margin-top: 100px;
  }
`

export default QuestionContainer
