import React from 'react';
import { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../index.css';

const client = new ApolloClient({
  uri: 'https://localhost:6006/graphql/mocked',
  cache: new InMemoryCache(),
});

require('../mocks')

const theme = createTheme();

export default function App({ Component, pageProps}: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}
