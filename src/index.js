import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './themes/default';
import {
  StoreContext,
  createStore,
  combineReducers
} from './ridaks/store';
import reducers from "./ridaks/reducers";

export const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <App />
    </StoreContext.Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
