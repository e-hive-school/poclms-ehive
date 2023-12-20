import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { GlobalStyles, Theme } from './styles/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
