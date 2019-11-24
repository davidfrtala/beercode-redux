import React from 'react';
import PropTypes from 'prop-types';

// material
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const UpgradePlan = ({ isPro, onUpgradeClick }) => {
  const classes = useStyles();
  
  return (
    <div
      className={classes.root}
    >
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          Upgrade to PRO
        </Typography>
        {isPro || (
          <Typography
            align="center"
            variant="body2"
          >
            Upgrade to PRO and get more awesomness
          </Typography>
        )}
      </div>
      <div className={classes.actions}>
        <Button
          color="secondary"
          component="a"
          variant={isPro ? 'outlined' : 'contained'}
          onClick={onUpgradeClick}
        >
          {isPro ? 'Unsubscribe' : 'Upgrade'}
        </Button>
      </div>
    </div>
  );
};

UpgradePlan.propTypes = {};

export default UpgradePlan;