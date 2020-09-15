import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  progress: {
    width: '60%',
  },
});

export const Loading = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <LinearProgress className={classes.progress} color="secondary" />
    </Grid>
  );
};
