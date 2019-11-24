import React from 'react';
import PropTypes from 'prop-types';
import theme from './themes/default'

// material
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// containers
import Wishlist from './containers/Wishlist';
import Sidebar from './containers/Sidebar';

// components
import Header from './components/Header';

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 256,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

function App(props) {
  const { classes } = props;
  
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Sidebar />
        </nav>
        <div className={classes.app}>
          <Header/>
          <main className={classes.main}>
            <Wishlist />
          </main>
          <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
              Beer Code 2019 @ David Frtala
            </Typography>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);