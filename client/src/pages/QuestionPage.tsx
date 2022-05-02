import styled from 'styled-components'
import { QuestionContainer } from '../components'

const QuestionPage = () => {
  return (
    <Wrapper>
      <QuestionContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid black;
`

export default QuestionPage
