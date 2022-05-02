import GlobalStyles from './global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, QuestionPage, Landing } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
