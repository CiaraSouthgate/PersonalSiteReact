import { externalLinks } from '../assets/constants';
import Link from '@material-ui/core/Link';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  iconLink: {
    color: 'inherit',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export const LinkButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Object.values(externalLinks).map(({ name, url, icon }) => {
        return (
          <IconButton
            className={classes.iconLink}
            key={name}
            component={Link}
            href={url}
            target="_blank"
          >
            {icon}
          </IconButton>
        );
      })}
    </div>
  );
};
