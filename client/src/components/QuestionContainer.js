import styled from 'styled-components'
import { Question } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionContainer = ({ setQuestion, question }) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])
  const [isOver, setIsOver] = useState(false)

  let url = `http://localhost:5004/api/v1/tags?tags=${tagsNextQuestion.join(', ')}`

  const handleClick = (tags) => {
    console.log('tags', tags)
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })

    console.log(url)
    console.log(tagsNextQuestion)
  }

  const fetchData = async (url) => {
    const response = await axios.get(url)

    const id = response.data.questions[0]?._id

    if (tagsNextQuestion.length > 1 && !id) {
      console.log('termine')
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
        <p>Vous avez finit le quizz.</p>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  margin: 100px auto;
`

export default QuestionContainer
