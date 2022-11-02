import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { theme } from './styles/Theme.style';

const App = () => {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
