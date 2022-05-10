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
        if (r?.disabled) {
          return (
            <HipsterButton disabled key={r._id}>
              Disponible le 7 Juin!
            </HipsterButton>
          )
        }

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
  width: 100%;
  h1 {
    color: var(--primary);
    font-size: 1.4rem;
  }
  padding: 20px;
  box-shadow: 1px 1px 15px black;
`

export default Question
