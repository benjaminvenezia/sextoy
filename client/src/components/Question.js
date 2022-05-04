import styled from 'styled-components'
import { HipsterButton } from '.'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
// import { Question as QuestionModel } from '@/models/Question'

// type Props = {
//   question: QuestionModel,
// }

//Quand on clique on doit immédiatement trouver une question relative aux tags contenus dans tagsNextQuestion

const Question = () => {
  const [question, setQuestion] = useState()
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5004/api/v1/`).then((res) => {
      const questions = res.data
      setQuestion(questions)
    })
  }, [])

  const questionObj = question?.questions[0]

  //on destructure pas ici
  const level = questionObj?.level
  const label_question = questionObj?.label_question
  const responses = questionObj?.responses
  const tags_question = questionObj?.tags_question
  let url = `http://localhost:5004/api/v1/tags?tags=${tagsNextQuestion.join(',')}`

  //let url = `http://localhost:5004/api/v1/tags?tags=neophyte, fun, sobre`
  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })

    console.log(url)
    console.log(tagsNextQuestion)

    callApi(url)
  }

  const callApi = (url) => {
    axios.get(url).then((res) => {
      const question = res.data
      setQuestion(question)
    })
  }

  return (
    <Wrapper>
      <h1>{label_question}</h1>

      {console.log(tagsNextQuestion)}
      {responses?.map((r) => {
        return (
          <HipsterButton onClick={() => handleClick(r.tags)} key={r._id}>
            {r.label_answer}
          </HipsterButton>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`

export default Question
