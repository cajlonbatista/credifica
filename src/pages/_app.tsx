import React from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../themes/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
