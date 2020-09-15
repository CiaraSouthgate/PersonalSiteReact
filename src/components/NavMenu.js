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

const useStyles = makeStyles((theme) => ({
  drawer: {
    display: 'flex',
  },
  listItem: {
    // textAlign: 'end',
  },
  linkIcons: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignContent: 'space-around',
  },
}));

export const NavMenu = ({ pages, handlePageChange }) => {
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
                  className={classes.listItem}
                  button
                  onClick={() => {
                    handlePageChange(null, page);
                  }}
                  value={page}
                >
                  <ListItemText primary={page.name} />
                </ListItem>
              )
            );
          })}
        </List>
        <Divider variant="middle" />
        <LinkButtons className={classes.linkIcons} size="large" />
      </Drawer>
    </div>
  );
};
