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

  useEffect(() => {
    callApi(url)
  }, [tagsNextQuestion])

  const callApi = (url) => {
    axios.get(url).then((res) => {
      const question = res.data

      // const questionObj = question?.questions[0]

      // //on destructure pas ici
      // const level = questionObj?.level
      // const label_question = questionObj?.label_question
      // const responses = questionObj?.responses
      // const tags_question = questionObj?.tags_question

      // console.log('level', level)
      // console.log('label', label_question)

      // if (!level && !label_question && !responses && !tags_question) {
      //   console.log('on arrête ici.')
      // }

      console.log(question)

      setQuestion(question)
    })
  }

  return (
    <Wrapper>
      {!isOver ? (
        <Question question={question} handleClick={handleClick} />
      ) : (
        <p>On a terminé!</p>
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
