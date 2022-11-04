import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Disc from "./components/Disc";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Disc onClick={() => {}} type="number" flipped={false} matched={false} />
    </ThemeProvider>
  );
};

export default App;
