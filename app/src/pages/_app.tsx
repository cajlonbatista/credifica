import React from 'react';
import { AppProps } from 'next/app';

import { wrapper } from '../store/store';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../themes/theme';
import '../styles/antd.less';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
