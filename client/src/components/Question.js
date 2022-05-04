import styled from 'styled-components'
import { HipsterButton } from '.'
import { useState } from 'react'
import axios from 'axios'
// import { Question as QuestionModel } from '@/models/Question'

type Props = {
  question: QuestionModel,
}

//Extraire la donnée dans le contexte
// - les tags

const Question = ({ question }: Props) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])

  const questionObj = question?.questions[0]

  //on destructure pas ici
  const level = questionObj?.level
  const label_question = questionObj?.label_question
  const responses = questionObj?.responses
  const tags_question = questionObj?.tags_question

  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
    })

    let url = `http://localhost:5004/api/v1/tags?tags=${tagsNextQuestion.join(',')}`

    console.log(url)

    axios.get(url).then((res) => {
      const question = res.data
      console.log(question)
    })
  }

  return (
    <Wrapper>
      <h1>{label_question}</h1>
      {/* <ul>
        {tagsNextQuestion.map((tag) => {
          return <li>{tag}</li>
        })}
      </ul> */}
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
