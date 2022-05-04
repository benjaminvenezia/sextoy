import styled from 'styled-components'
import { HipsterButton } from '.'
import { useState } from 'react'
// import { Question as QuestionModel } from '@/models/Question'

type Props = {
  question: QuestionModel,
}

const Question = ({ question }: Props) => {
  const [tagsNextQuestion, setTagsNextQuestion] = useState([])

  console.log(question)
  const questionObj = question?.questions[0]
  //on destructure pas encore
  const level = questionObj?.level
  const label_question = questionObj?.label_question
  const responses = questionObj?.responses
  const tags_question = questionObj?.tags_question

  // console.log('level :', level)
  // console.log('label_question :', label_question)
  // console.log('responses:', responses)
  // console.log('tags question:', tags_question)
  // console.log('label_question : ', label_question)
  // console.log('level : ', arrResponse)

  const handleClick = (tags) => {
    tags.forEach((tag) => {
      setTagsNextQuestion([...tagsNextQuestion, tag])
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
