import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import GameContainer from "./components/GameContainer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer />
    </ThemeProvider>
  );
};

export default App;
