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
      <div className="container-response">
        <h1>{label_question}</h1>
        <div className="buttons-answers">
          {responses?.map((r) => {
            if (r?.disabled) {
              return (
                <HipsterButton disabled key={r._id}>
                  {r.label_answer}{' '}
                  <span className="todo">Disponible le 7 Juin!</span>
                </HipsterButton>
              )
            }

            return (
              <HipsterButton onClick={() => handleClick(r.tags)} key={r._id}>
                {r.label_answer}
              </HipsterButton>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container-response {
    margin: 0 auto;
    width: 80%;
  }

  margin: 0 auto;
  .buttons-answers {
    margin-top: 120px;
    display: flex;
    justify-content: center;
  }

  .todo {
    font-size: 12px;
    color: gray;
    font-style: italic;
  }

  width: 50%;
  h1 {
    color: var(--primary);
    font-size: 1.4rem;
  }
  padding: 20px;
  box-shadow: 1px 1px 15px black;

  @media (max-width: 992px) {
    width: 100%;
    .buttons-answers {
      margin-top: 80px;
      flex-direction: column;
    }
  }
`

export default Question
