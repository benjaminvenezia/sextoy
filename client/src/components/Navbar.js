import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <img className="LogoNav" href="/" src="LogoDesyre.svg" alt="" />

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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0 15% 0;

  .LogoSearch {
    width: 30px;
  }

  .salut{
    color: rgb(246, 235, 216);
    margin-left: 40px;
    padding-bottom: 7px;
  }

  a {
    text-decoration: none;
    background: linear-gradient(
        to top,
        rgba(246, 235, 216, 1) 0%,
        rgba(246, 235, 216, 1) 10%,
        transparent 10.01%
      )
      no-repeat left bottom  / 0 100%;
    transition: background-size 0.5s;
  }

  a:hover {
    background-size: 100% 100%;
  }

  .LogoNav {
    width: 100px;
  }

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  background: var(--black);

  .nav-center {
    width: 85%;
  }
`

export default Navbar
