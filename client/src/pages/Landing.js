import { NetworksIcons, HipsterButton, BadConnexionLoader } from '../components'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import QuestionPage from './QuestionPage'
import axios from 'axios'
import video from '../assets/video/Animation_Desyre.mp4'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isSafari,
} from 'react-device-detect'

const Landing = () => {
  const [showLanding, setShowLanding] = useState(true)
  const [showAnimation, setShowAnimation] = useState(false)
  const [counter, setCounter] = useState()
  const [showLoader, setShowLoader] = useState(true)

  const handleClick = () => {
    setShowAnimation(true)
    setTimeout(function () {
      setShowLanding(false)
    }, 550)
  }

  useEffect(() => {
    const fetchData = async () => {
      const counter = await axios.get('api/v1/counter')
      setCounter(counter.data)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const loadVideo = () => {
    setShowLoader(false)
  }

  if (showLanding) {
    return (
      <Wrapper className={showAnimation ? 'remove-animation' : ''}>
        {showLoader && !isSafari && <BadConnexionLoader />}

        {!isSafari && (
          <video
            autoPlay={true}
            playsInline
            muted
            defaultMuted
            onLoadedData={loadVideo}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="text-container">
          <p>
            <span className="span1 fading-animation1">Dis-nous en plus sur toi</span>
            <br />
            <span className="span1 fading-animation1">...</span>
            <br />
            <span className="span2 fading-animation2">Laisse nous te guider</span>
            <br />
            <span className="span1 fading-animation2">...</span>
            <br />
            <span className="span3 fading-animation3">
              Et soit la {counter} ème personne à trouver le sextoy de ses rêves.
            </span>
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
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .fading-animation1 {
    animation-name: fade;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .fading-animation2 {
    animation-name: fade;
    animation-duration: 3s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  .fading-animation3 {
    animation-name: fade;
    animation-duration: 2s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

  .fall-animation {
    animation-name: fall;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  .text-container {
    height: 81vh;
    padding: 0 20px;
    margin-top: 7%;
    text-align: center;
    p {
      text-shadow: 5px 5px 15px black, 5px 5px 15px black;
      margin: 0 auto;
      span {
        font-family: Helvetica, sans-serif;
        font-weight: 100;
        letter-spacing: 0.1rem;
      }

      .span1 {
        opacity: 0;
        font-size: 1.2rem;
      }
      .span2 {
        opacity: 0;
        font-size: 1.5rem;
      }
      .span3 {
        opacity: 0;
        font-size: 2rem;
      }
    }
  }

  button {
    margin-top: 10%;
    padding: 18px 28px;

    &:focus {
      border: none;
      outline-style: none;
      box-shadow: 0px 0px 5px white, 0px 0px 25px lightgray, 0px 0px 35px gray;
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
      box-shadow: 0px 0px 5px white, 0px 0px 25px lightgray, 0px 0px 35px gray;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fall {
    0% {
      opacity: 0%;
      transform: scaleY(-100px);
    }
    100% {
      opacity: 100%;
      transform: scaleY(0);
    }
  }
`
export default Landing
