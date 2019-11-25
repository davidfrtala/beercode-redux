import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StoreContext } from '../ridaks/store'

import {
  addItem,
  deleteItem,
  modalOpen,
  modalClose
} from '../ridaks/reducers/wishlist'


// material
import {
  AppBar,
  Toolbar,
  Tooltip,
  Paper,
  Grid,
  Button,
  TextField,
  List
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// icons
import SearchIcon from '@material-ui/icons/Search';

// components
import WishlistItem from '../components/WishlistItem';
import AddItemDialog from '../components/AddItemDialog';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

class Wishlist extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    this.unsubscribeStore = this.context.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    const { classes, itemsMax } = this.props;
    const store = this.context;

    const { items, dialogOpen } = store.getState().wishlist;
    const { isPro } = store.getState().user;

    const itemsLimit = isPro ? 100 : itemsMax;
    const isAddDisabled = items.length >= itemsLimit;

    return (
      <Paper className={classes.paper}>

        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by name"
                  InputProps={{
                    disableUnderline: true,
                    className: classes.searchInput,
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addUser}
                  onClick={() => store.dispatch(modalOpen())}
                  disabled={isAddDisabled}
                >
                  Add item
                </Button>

                <Tooltip title="Upgrade to PRO and unlock this limit" arrow>
                  <Button>
                    {`${items.length} / ${itemsLimit}`}
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <div className={classes.contentWrapper}>
          <Grid container>
            <Grid item xs>
              <List>
                {items.map(item => (
                  <WishlistItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    onDelete={id => store.dispatch(deleteItem(id))}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        </div>

        <AddItemDialog
          open={dialogOpen}
          onSubmit={title => store.dispatch(addItem(title))}
          onClose={() => store.dispatch(modalClose())}
        />
      </Paper>
    );
  }
}

Wishlist.propTypes = {
  classes: PropTypes.object.isRequired,
  itemsMax: PropTypes.number.isRequired,
};

Wishlist.defaultProps = {
  itemsMax: 5
};

export default withStyles(styles)(Wishlist);
