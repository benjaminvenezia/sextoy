import { Logo } from '../components'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const Landing = () => {
  const { toggleWelcome, hello } = useAppContext()
  return (
    <Wrapper>
      <h1>Landing</h1>
      {hello ? <p>Welcome!</p> : <p>Pas hello :/</p>}
      <button onClick={toggleWelcome}>Context</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        laboriosam commodi assumenda tenetur consequatur alias rerum officiis modi
        tempora soluta? Nam pariatur rerum quibusdam dicta natus sapiente commodi
        consequatur ratione.
      </p>
      <Logo />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Landing
