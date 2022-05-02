import styled from 'styled-components'
import { Question } from '.'

const QuestionContainer = () => {
  return (
    <Wrapper>
      <Question />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
`

export default QuestionContainer
