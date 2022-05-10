import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <img className="LogoNav" src="LogoDesyre.svg" alt="" />

        <div className='containerNavElmt' >
          <Link to="/">Desyre</Link>
          <Link to="/">Homme</Link>
          <Link to="/">Femme</Link>
          <Link to="/">Couple</Link>
          <Link to="/">Partenaires</Link>
          <Link to="/">Contacts</Link>
          <Link to="login">Login</Link>
        </div>
        <img className='LogoSearch' src="logo_search.png" alt="" />
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0 15% 0;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .LogoSearch{
    width: 30px;
  }
  
  a{
    margin-left: 40px;
    color: #F6EBD8;
    display: inline;
  }

  a::after{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #F6EBD8;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  a:hover::after{
    transform: scale(1);
  }

  .containerNavElmt{
    align-items: center;
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

  /* .logo {
    display: flex;
    align-items: center;
    width: 100px;
  } */


  /* .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  } */


  /* .btn-container {
    position: relative;
  } */
  /* .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  } */

  /* .logo-text {
    display: none;
    margin: 0;
  } */
  /* @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  } */
`

export default Navbar
