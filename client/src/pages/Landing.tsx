import { Logo } from '../components'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const Landing = () => {
  const { toggleWelcome, hello } = useAppContext()
  return (
    <Wrapper>
      <div className="page">
        <h1>Desyr</h1>
        {hello ? <p>Bienvenue!</p> : <p>Pas hello :/</p>}
        <button onClick={toggleWelcome}>Context</button>
        <p>
          Bienvenue sur Desyr, ce site vous permettra de trouver la catégorie de
          Sextoy qui vous convient!
        </p>
        {/* <Logo /> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    color: var(--primary-50);
    span {
      color: var(--primary-50);
    }
  }
  p {
    color: var(--primary-50);
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
