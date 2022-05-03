import styled from 'styled-components'
import { HipsterButton } from '.'
import { useState } from 'react'
import { Question as QuestionModel } from '@/models/Question'

type Props = {
  question: QuestionModel[]
}

const Question = ({ question }: Props) => {
  const [id, setId] = useState(0)

  return (
    <Wrapper>
      <h1>{question[id].label}</h1>
      <button onClick={() => setId((id) => id + 1)}>next</button>
      <HipsterButton>Un homme</HipsterButton>
      <HipsterButton>Une femme</HipsterButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Question
