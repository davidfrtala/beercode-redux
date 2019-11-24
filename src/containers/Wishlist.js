import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

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

  state = {
    dialogOpen: false,
    items: [
      { id: uuid(), title: "Red Dead Redemption 2" },
      { id: uuid(), title: "Death Stranding" },
      { id: uuid(), title: "Cyberpunk 2077" },
      { id: uuid(), title: "The Last Of Us 2" },
    ]
  };
  
  handleModalOpen = () => this.setState({ dialogOpen: true });
  
  handleModalClose = () => this.setState({ dialogOpen: false });
  
  addItem = title => this.setState({
    items: [
      ...this.state.items,
      { id: uuid(), title }
    ]
  });
  
  deleteItem = id => this.setState({
    items: this.state.items.filter(item => item.id !== id)
  });
  
  render() {
    const { classes, itemsMax } = this.props;
    const { items, dialogOpen } = this.state;
    const isAddDisabled = items.length >= itemsMax;
    
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
                  onClick={this.handleModalOpen}
                  disabled={isAddDisabled}
                >
                  Add item
                </Button>
  
                <Tooltip title="Upgrade to PRO and unlock this limit" arrow>
                  <Button>
                    {`${items.length} / ${itemsMax}`}
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
                    onDelete={this.deleteItem}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
        
        <AddItemDialog
          open={dialogOpen}
          onSubmit={this.addItem}
          onClose={this.handleModalClose}
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