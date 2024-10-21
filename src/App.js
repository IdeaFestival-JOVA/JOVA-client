import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import GlobalStyle from "./fonts/GlobalStyle";
import Notion from "./page/Notion/Notion";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notion" element={<Notion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
