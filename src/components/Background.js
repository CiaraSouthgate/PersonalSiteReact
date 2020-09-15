import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { topBarHeight } from 'assets/constants';
import 'App.css';

const useStyles = makeStyles((theme) => ({
  mainBackground: {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      overflow: 'auto',
    },
  },
  contentsDiv: {
    width: '100vw',
    minHeight: `calc(100vh - ${topBarHeight}px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    overflow: 'auto',
    color: theme.palette.primary.contrastText,
    textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      marginTop: topBarHeight,
    },
  },
  credits: {},
}));

export const Background = ({ content, dimBackground }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.mainBackground} ${
        dimBackground ? 'blueBackground-NoLine' : 'blueBackground'
      }`}
    >
      <div
        className={`${dimBackground ? 'darkBackground' : 'trianglesBackground'}
          ${classes.contentsDiv}`}
      >
        {content}
      </div>
    </div>
  );
};
