import styled from 'styled-components'
import { Question } from '.'

const QuestionContainer = ({ question }: any) => {
  return (
    <Wrapper>
      <Question question={question} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  margin: 100px auto;
`

export default QuestionContainer
