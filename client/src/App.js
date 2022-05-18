import GlobalStyles from './global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, LoginPage, Landing, Contact } from './pages'
import { Navbar } from './components'
import imagefond from './assets/images/Fonddraps.jpg'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper className="App">
      <GlobalStyles />
      <img className="generalbg" src={imagefond} alt="Une image de rideau" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .generalbg {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: -10000;
  }
`

export default App
