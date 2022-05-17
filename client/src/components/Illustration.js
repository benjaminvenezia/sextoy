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
  }, [illu])

  return <StyledImage src={illu} alt="an suggestive illustration" />
}

const StyledImage = styled.img`
  width: auto;
  height: 60%;
  overflow: hidden;
  position: absolute;
  right: 20%;
  opacity: 0.5;
  z-index: -100;

  @media (max-width: 992px) {
    width: 50%;
    bottom: 0;
  }
`

export default Illustration
