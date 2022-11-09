import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Modal from "./components/Modal";
import Header from "./components/Header";
import ScoreMenu from "./components/ScoreMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
