import illu_1 from '../assets/images/illustration-1.svg'
import illu_2 from '../assets/images/illustration-2.svg'
import illu_3 from '../assets/images/illustration-3.svg'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Illustration = () => {
  const [illu, setIllu] = useState('')

  const pickRandomIllustration = () => {
    const illustrations = [illu_1, illu_2, illu_3]
    const randomId = Math.floor(Math.random() * 3)
    return illustrations[randomId]
  }

  useEffect(() => {
    const illustration = pickRandomIllustration()
    setIllu(illustration)
  }, [])

  let filenameSplitted = illu.split('.')
  filenameSplitted = filenameSplitted[0].split('/')
  const illustrationName = filenameSplitted[filenameSplitted.length - 1]

  if (illustrationName == 'illustration-1') {
    return <Illu1 src={illu} alt="an suggestive illustration" />
  } else if (illustrationName == 'illustration-2') {
    return <Illu2 src={illu} alt="an suggestive illustration" />
  } else if (illustrationName == 'illustration-3') {
    return <Illu3 src={illu} alt="an suggestive illustration" />
  }
}

const StyledImage = styled.img`
  width: auto;
  height: 60%;
  overflow: hidden;
  position: absolute;
  opacity: 0.5;
  z-index: -100;

  @media (max-width: 992px) {
    width: 50%;
    bottom: 0;
  }
`
//masturbation
const Illu1 = styled(StyledImage)`
  height: 80%;
  bottom: 0;
  left: 0;

  @media (max-width: 992px) {
    width: 70%;
    bottom: 0;
  }
`
//main qui tient le petit dildo
const Illu2 = styled(StyledImage)`
  height: 75%;
  left: 0;

  @media (max-width: 992px) {
    width: 70%;
    bottom: 0;
  }
`

//main qui tient le grand dildo
const Illu3 = styled(StyledImage)`
  height: 80%;
  right: 20px;

  @media (max-width: 992px) {
    width: 70%;
    bottom: 0;
  }
`

export default Illustration
