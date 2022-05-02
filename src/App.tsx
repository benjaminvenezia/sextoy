import GlobalStyles from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, QuestionPage, Landing } from "./pages";
import { Test, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<QuestionPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
