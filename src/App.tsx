import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button type="L" onClick={() => {}} btnText="Start Game" />
      <Button disabled={true} type="M" onClick={() => {}} btnText="Numbers" />
      <Button type="S" onClick={() => {}} btnText="Restart" />
      <Button
        type="S"
        color={theme.colors.orange}
        onClick={() => {}}
        btnText="New Game"
      />
      <Logo color={theme.colors.black}>
        <Heading size="L" children="memory"></Heading>
      </Logo>
    </ThemeProvider>
  );
};

export default App;
