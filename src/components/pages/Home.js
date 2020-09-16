import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'App.css';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(10),
    },
  },
  subtitle: {
    fontFamily: 'Raleway',
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
      <Typography variant="h1" align="center">
        <b>Ciara Southgate</b>
      </Typography>
      <Typography className={classes.subtitle} variant="h4" align="center">
        Software Developer
      </Typography>
    </Grid>
  );
};
