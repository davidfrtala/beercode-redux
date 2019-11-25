import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './themes/default';
import {
  StoreContext,
  store
} from './ridaks/store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <App />
    </StoreContext.Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
