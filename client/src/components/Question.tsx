import styled from 'styled-components'
import { HipsterButton } from '.'

const Question = () => {
  return (
    <Wrapper>
      <h1>Etes vous une femme ou un homme?</h1>
      <HipsterButton>Un homme</HipsterButton>
      <HipsterButton>Une femme</HipsterButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Question
