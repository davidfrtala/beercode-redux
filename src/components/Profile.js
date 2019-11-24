import React from 'react';
import PropTypes from 'prop-types';

// material
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = ({ isPro }) => {
  const classes = useStyles();
  
  const user = {
    name: 'David Frtala',
    avatar: 'https://via.placeholder.com/100x100.png?text=DAVE',
    bio: 'Place some bio here'
  };
  
  return (
    <div
      className={classes.root}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        src={user.avatar}
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}

        {isPro && <StarIcon />}
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  isPro: PropTypes.bool
};

export default Profile;