import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    marginBottom: theme.spacing(10),
  },
  name: {
    fontFamily: 'Megrim',
  },
  subtitle: {
    textTransform: 'uppercase',
    fontWeight: '300',
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.homeContainer}
      container
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Typography className={classes.name} variant="h1" align="center">
        <b>Ciara Southgate</b>
      </Typography>
      <Typography className={classes.subtitle} variant="h4" align="center">
        Software Developer - Vancouver, BC
      </Typography>
    </Grid>
  );
};
