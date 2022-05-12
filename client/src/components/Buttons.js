import styled, { css } from 'styled-components'

export const DefaultButton = styled.button`
  border-radius: 40px;
  cursor: pointer;
  width: 200px;
  font-size: 1.1rem;
  font-weight: 200;
  height: 70px;
  border: none;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
`

export const HipsterButton = styled(DefaultButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${(props) => (props.disabled ? 'gray' : '#F6EBD8')};
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid #F6EBD8')};
  &:hover {
    box-shadow: 0 0 5px var(--primary);
    transition: 0.5s;
    text-shadow: 0 0 1px var(--primary), 0 0 1px var(--primary),
      0 0 1px var(--primary), 0 0 1px var(--primary);
  }
`
