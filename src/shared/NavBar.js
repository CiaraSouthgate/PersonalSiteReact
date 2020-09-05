import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { pages } from '../constants';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import { NavMenu } from './NavMenu';
import { NavTabs } from './NavTabs';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    color: 'inherit',
  },
  name: {
    fontFamily: 'Megrim',
    fontWeight: 'bold',
    flexGrow: 1,
  },
  tabLink: {
    color: 'inherit',
  },
});

export const NavBar = ({ currentPage, handlePageChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography className={classes.name} variant="h6">
          {currentPage === pages.HOME ? '' : 'Ciara Southgate'}
        </Typography>
        {smallScreen ? (
          <NavMenu handlePageChange={handlePageChange} />
        ) : (
          <>
            <NavTabs handlePageChange={handlePageChange} currentPage={currentPage} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
