import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    marginRight: theme.spacing(1),
    filter: 'drop-shadow(1px 1px 1px #222)',
  },
  container: {
    padding: theme.spacing(1),
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));

export const SkillCard = ({ label, icon, description }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      item
      container
      xs={12}
      lg={4}
      direction="row"
      alignItems="center"
    >
      <Avatar className={classes.avatar} variant="rounded" alt={label} src={icon} />
      <Typography>{label}</Typography>
    </Grid>
  );
};
