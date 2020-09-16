import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { LinkButtons } from './LinkButtons';
import { pages } from 'assets/constants';

const useStyles = makeStyles((theme) => ({
  drawer: {
    display: 'flex',
  },
  linkIcons: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignContent: 'space-around',
  },
}));

export const NavMenu = ({ handlePageChange }) => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div onClick={toggleDrawer}>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer className={classes.drawer} anchor="right" open={drawerOpen}>
        <List>
          {Object.values(pages).map((page) => {
            return (
              page !== pages.HOME && (
                <ListItem
                  key={page.name}
                  button
                  onClick={() => {
                    handlePageChange(page.name);
                  }}
                >
                  <ListItemText primary={page.name} />
                </ListItem>
              )
            );
          })}
        </List>
        <Divider variant="middle" />
        <LinkButtons className={classes.linkIcons} />
      </Drawer>
    </div>
  );
};
