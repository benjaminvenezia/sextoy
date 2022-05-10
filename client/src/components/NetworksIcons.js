import styled from 'styled-components'
import facebookUrl from '../assets/icons/facebook.svg'
import instagramUrl from '../assets/icons/instagram.svg'

const NetworksIcons = () => {
  return (
    <Wrapper>
      <img src={instagramUrl} alt="instagram icon" />
      <img src={facebookUrl} alt="facebook icon" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
  height: 50px;
  flex-direction: column;
  max-width: 20px;
`

export default NetworksIcons
