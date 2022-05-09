import { Logo } from '../components'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'
import QuestionPage from './QuestionPage'

const Landing = () => {
  const [showLanding, setShowLanding] = useState(true)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleClick = () => {
    setShowAnimation(true)
    setTimeout(function () {
      setShowLanding(false)
    }, 550)
  }

  if (showLanding) {
    return (
      <Wrapper className={showAnimation ? 'remove-animation' : ''}>
        <div className="page">
          <h1>Desyr</h1>
          <p>Nous avons ce qui te convient...</p>
          <button onClick={handleClick}>Découvrir</button>
        </div>
      </Wrapper>
    )
  } else {
    return <QuestionPage />
  }
}

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    color: var(--primary-50);
    span {
      color: var(--primary-50);
    }
  }
  p {
    color: var(--primary-50);
  }

  /* @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  } */
`
export default Landing
