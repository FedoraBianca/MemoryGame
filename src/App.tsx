import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import { theme } from "./styles/Theme.style";
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
    </ThemeProvider>
  );
};

export default App;
