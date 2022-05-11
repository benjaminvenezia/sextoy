import loading from '../assets/icons/loading.svg'
import styled from 'styled-components'

const Spinner = () => {
  return <ImageStyled src={loading} alt="" />
}

const ImageStyled = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 28%;
  text-align: center;
  width: 40px;
`

export default Spinner
