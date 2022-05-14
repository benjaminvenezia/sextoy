import styled from 'styled-components'
import { Logo } from '.'

// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />

      {/* <div className="containerNavElmt">
          <Link className="salut" to="/">
            Homme
          </Link>
          <Link className="salut" to="/">
            Femme
          </Link>
          <Link className="salut" to="/">
            Couple
          </Link>
          <Link className="salut" to="/">
            Partenaires
          </Link>
          <Link className="salut" to="/">
            Contacts
          </Link>
        </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  justify-content: center;

  .salut {
    color: rgb(246, 235, 216);
    margin-left: 40px;
    padding-bottom: 7px;
  }

  a {
    text-decoration: none;
    background: linear-gradient(
        to top,
        rgba(246, 235, 216, 1) 0%,
        rgba(246, 235, 216, 1) 2%,
        transparent 3.01%
      )
      no-repeat left bottom / 0 100%;
    transition: background-size 0.5s;
  }

  a:hover {
    background-size: 100% 100%;
  }

  background: var(--black);
`

export default Navbar
