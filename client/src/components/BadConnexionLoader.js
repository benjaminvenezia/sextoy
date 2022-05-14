import styled from 'styled-components'

const BadConnexionLoader = () => {
  return (
    <Wrapper>
      <div className="animation-container">
        <p>Chargement ...</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  position: absolute;

  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000000;
  background-color: black;
  color: white;

  .animation-container {
    width: 50%;
    margin: 0 auto;
    padding-top: 10%;
    text-align: center;

    p {
      margin: 0 auto;
      font-size: 1.3rem;
    }
  }
`

export default BadConnexionLoader
