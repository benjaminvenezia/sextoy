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
      </Wrapper>
    )
  } else {
    return <QuestionPage />
  }
}

const Wrapper = styled.main`
  height: 100vh;

  .text-container {
    padding: 0 20px;
    margin-top: 7%;
    text-align: center;
    p {
      margin: 0 auto;
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
    margin-top: 10%;
    padding: 18px 28px;

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

  @media (max-width: 992px) {
    .text-container {
      margin-top: 15%;
    }

    button {
      margin-top: 35%;
      padding: 25px 45px;
      box-shadow: 0px 0px 5px pink, 0px 0px 25px magenta, 0px 0px 35px purple;
    }
  }
`
export default Landing
