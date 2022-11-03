import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Logo from "./components/Logo";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Logo />
    </ThemeProvider>
  );
};

export default App;
