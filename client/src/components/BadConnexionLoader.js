import styled from 'styled-components'

const BadConnexionLoader = () => {
  return <Wrapper>Chargement</Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 1000000;
  background-color: black;
  color: white;
`

export default BadConnexionLoader
