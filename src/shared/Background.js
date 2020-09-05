import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { topBarHeight } from '../constants';
import './Background.css';

const useStyles = makeStyles({
  mainBackground: {
    width: '100vw',
    height: '100vh',
  },
  tint: {
    backgroundColor: 'rgba(92, 148, 161, 0.7)',
    width: '100vw',
    height: '100vh',
  },
  contentsDiv: {
    width: '100vw',
    height: `calc(100vh - ${topBarHeight}px)`,
    position: 'absolute',
    marginTop: topBarHeight,
    display: 'flex',
  },
});

export const Background = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper className={`mainBackground ${classes.mainBackground}`} square>
      <div className={classes.contentsDiv}>{content}</div>
    </Paper>
  );
};
