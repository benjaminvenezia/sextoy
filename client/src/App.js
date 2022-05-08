import GlobalStyles from './global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, LoginPage, Homepage } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
