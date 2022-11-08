import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Modal from "./components/Modal";
import Header from "./components/Header";
import ScoreMenu from "./components/ScoreMenu";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Modal>
        <ScoreMenu />
      </Modal>
    </ThemeProvider>
  );
};

export default App;
