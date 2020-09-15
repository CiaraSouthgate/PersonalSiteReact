import { externalLinks } from '../assets/constants';
import { ButtonGroup, IconButton } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  iconLink: {
    color: 'inherit',
  },
});

export const LinkButtons = (props) => {
  const classes = useStyles();

  return (
    <ButtonGroup {...props}>
      {Object.values(externalLinks).map(({ name, url, icon }) => {
        return (
          <IconButton
            className={classes.iconLink}
            component={Link}
            href={url}
            target="_blank"
            key={name}
          >
            {icon}
          </IconButton>
        );
      })}
    </ButtonGroup>
  );
};
