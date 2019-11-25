import React, { useRef } from 'react';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

export default function AddItemDialog({ open, onSubmit, onClose }) {
  const myInput = useRef();

  const handleSubmit = e => {
    const { value } = myInput.current;
    e.preventDefault();

    if (value !== '') {
      onSubmit(myInput.current.value);
      onClose();
    }
  };

  return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new whislist item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus euismod ligula, eu hendrerit libero mattis non.
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            required
            id="title"
            name="title"
            label="Item name"
            type="text"
            variant="outlined"
            inputRef={myInput}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSubmit}>
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
  );
}
