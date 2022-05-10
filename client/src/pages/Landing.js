import { NetworksIcons } from '../components'
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
            <button autoFocus onClick={handleClick}>
              Découvrir
            </button>
          </div>
        </div>
        <NetworksIcons className="networksIcons" />
      </Wrapper>
    )
  } else {
    return <QuestionPage />
  }
}

const Wrapper = styled.main`
  position: relative;

  .text-container {
    margin-top: 50%;
    text-align: center;
    p {
      span {
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

  .networksIcons {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  button {
    padding: 10px 20px;
  }

  button:focus {
    border: none;
    outline-style: none;
    box-shadow: 0px 0px 5px pink, 0px 0px 25px magenta, 0px 0px 35px purple;
  }

  color: var(--primary);
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  background-color: var(--black);
  display: flex;
  justify-content: center;
  margin: 0 auto;

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
