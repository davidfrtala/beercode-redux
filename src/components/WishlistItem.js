import React from 'react';
import PropTypes from 'prop-types';

// material
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from '@material-ui/core';

// icons
import DeleteIcon from '@material-ui/icons/Delete';


function WishlistItem({ id, title, onDelete }) {
  
  return (
    <ListItem>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}


WishlistItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WishlistItem;