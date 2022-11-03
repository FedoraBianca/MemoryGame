import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Logo from "./components/Logo";
import Heading from "./components/Heading";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Logo color={theme.colors.black}>
        <Heading size="L" children="memory"></Heading>
      </Logo>
    </ThemeProvider>
  );
};

export default App;
