import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SkillCard } from './SkillCard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  collapse: {
    paddingLeft: theme.spacing(4),
    alignItems: 'baseline',
  },
}));

export const SkillCategory = ({ category, expanded, onChange }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(expanded);
  const { title, content } = category;

  const handleClick = () => {
    setOpen(!open);
    onChange();
  };

  useEffect(() => {
    if (expanded != null) setOpen(expanded);
  }, [expanded]);

  return (
    <>
      <ListItem button onClick={handleClick} key={title}>
        <ListItemText disableTypography primary={<Typography variant="h6">{title}</Typography>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} className={classes.collapse}>
        <Grid container spacing={2}>
          {Object.values(content).map((item) => {
            return (
              // <Grid item xs={12} lg="auto">
              <SkillCard icon={item.logoIcon} label={item.name} description={item.description} />
              // </Grid>
            );
          })}
        </Grid>
      </Collapse>
    </>
  );
};
