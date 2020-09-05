import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { pages } from '../constants';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  drawer: {
    paddingLeft: '2em',
  },
  listItem: {
    textAlign: 'end',
  },
  icon: {
    color: 'inherit',
  },
});

export const NavMenu = ({ handlePageChange }) => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div onClick={toggleDrawer}>
      <IconButton onClick={toggleDrawer}>
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
                  <ListItemText primary={page} />
                </ListItem>
              )
            );
          })}
          <Divider />
          <div>
            <IconButton
              className={classes.icon}
              component={Link}
              href="https://github.com/CiaraSouthgate"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              className={classes.icon}
              component={Link}
              href="https://www.linkedin.com/in/ciarasouthgate/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </List>
      </Drawer>
    </div>
  );
};
