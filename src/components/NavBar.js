import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { topBarHeight } from 'assets/constants';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.contrastText,
    margin: 0,
    padding: 0,
    paddingLeft: theme.spacing(2),
    color: 'inherit',
    height: topBarHeight,
  },
  name: {
    fontFamily: 'Megrim',
    fontWeight: 'bold',
    flexGrow: 1,
  },
  iconLink: {
    color: 'inherit',
  },
}));

export const NavBar = ({ showName, navigation }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense" disableGutters>
        <Typography className={classes.name} variant="h6">
          {showName ? 'Ciara Southgate' : ''}
        </Typography>
        {navigation}
      </Toolbar>
    </AppBar>
  );
};
