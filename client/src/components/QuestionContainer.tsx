import styled from 'styled-components'
import { Question } from '.'

const QuestionContainer = () => {
  return (
    <Wrapper>
      <Question
        question={[
          { id: 0, label: 'Es-tu un homme ou une femme ? ' },
          { id: 1, label: 'es-tu célibataire ou en couple?' },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
`

export default QuestionContainer
