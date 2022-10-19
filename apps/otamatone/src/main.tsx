import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { startBrowserWorker } from '@shared/util-msw';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import { handlers } from './mocks/handlers';
import { router } from './router';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://localhost:6006/graphql/mocked',
  cache: new InMemoryCache(),
});

if (process.env.NODE_ENV === 'development') {
  startBrowserWorker(handlers);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
