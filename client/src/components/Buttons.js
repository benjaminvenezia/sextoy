import styled, { css } from 'styled-components'

export const DefaultButton = styled.button`
  background: #645cff;
  border-radius: 25px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  border: none;
  text-transform: capitalize;
  display: block;

  margin: 1rem auto;
`

export const HipsterButton = styled(DefaultButton)`
  background: transparent;
  color: ${(props) => (props.disabled ? 'gray' : '#F6EBD8')};
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid #F6EBD8')};
`
