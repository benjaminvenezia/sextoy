import logo from '../assets/icons/LogoDesyre.svg'
import styled from 'styled-components'

const Logo = () => {
  return <Wrapper src={logo} alt="desyre" />
}

const Wrapper = styled.img`
  margin-top: 10px;
`

export default Logo
