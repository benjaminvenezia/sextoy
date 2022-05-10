import styled from 'styled-components'
import facebookUrl from '../assets/icons/facebook.svg'
import instagramUrl from '../assets/icons/instagram.svg'

const NetworksIcons = () => {
  return (
    <Wrapper>
      <a href="https://www.instagram.com/desyre.ch/" target="_blank">
        {' '}
        <img src={instagramUrl} alt="instagram icon" />
      </a>
      <img src={facebookUrl} alt="facebook icon" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img:hover {
    transform: scale(1.1);
  }

  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  justify-content: space-around;
  height: 75px;
  flex-direction: column;
  max-width: 20px;
`

export default NetworksIcons
