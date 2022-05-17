import logo from '../assets/icons/LogoDesyre.svg'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <a href="/">
        <img src={logo} alt="desyre" />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 10px;
  img {
    width: 100px;
  }
`

export default Logo
