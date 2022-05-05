import styled, { css } from 'styled-components'

export const DefaultButton = styled.button`
  background: #645cff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
`

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: ${(props) => (props.disabled ? 'gray' : 'blue')};
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid blue')};

  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  box-sizing: border-box;
`
