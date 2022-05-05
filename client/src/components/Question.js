import styled from 'styled-components'
import { HipsterButton } from '.'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
// import { Question as QuestionModel } from '@/models/Question'

// type Props = {
//   question: QuestionModel,
// }

//Quand on clique on doit immédiatement trouver une question relative aux tags contenus dans tagsNextQuestion

const Question = ({ question, handleClick }) => {
  const questionObj = question?.questions[0]

  const level = questionObj?.level
  const label_question = questionObj?.label_question
  const responses = questionObj?.responses
  const tags_match = questionObj?.tags_match

  return (
    <Wrapper>
      <h1>{label_question}</h1>

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
