import { NetworksIcons, HipsterButton } from '../components'
import styled from 'styled-components'
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
          <div className="text-container">
            <p>
              <span className="span1">Dis-nous en plus sur toi</span>
              <br />
              ...
              <br />
              <span className="span2">Laisse nous te guider</span>
              <br />
              ...
              <br />
              <span className="span3">Et découvre le sextoy de tes rêves.</span>
            </p>
            <HipsterButton autoFocus onClick={handleClick}>
              Découvrir
            </HipsterButton>
          </div>

          <NetworksIcons />
        </div>
      </Wrapper>
    )
  } else {
    return <QuestionPage />
  }
}

const Wrapper = styled.main`
  .page {
    position: relative;
    display: flex;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  .text-container {
    margin-top: 10%;
    text-align: center;
    p {
      span {
        font-family: Helvetica, sans-serif;
        font-weight: 100;
        letter-spacing: 0.1rem;
      }

      .span1 {
        font-size: 0.7rem;
        opacity: 0.5;
      }
      .span2 {
        font-size: 1rem;
        opacity: 0.75;
      }
      .span3 {
        font-size: 1.3rem;
      }
    }
  }

  button {
    padding: 10px 20px;

    &:focus {
      border: none;
      outline-style: none;
      box-shadow: 0px 0px 5px pink, 0px 0px 25px magenta, 0px 0px 35px purple;
    }

    &:hover {
      cursor: pointer;
    }
  }

  color: var(--primary);

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
