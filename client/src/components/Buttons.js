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
  background: transparent;
  color: ${(props) => (props.disabled ? 'gray' : 'white')};
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid white')};

  padding: 1rem;
  min-height: 200px;
  width: 200px;
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  box-sizing: border-box;
`
