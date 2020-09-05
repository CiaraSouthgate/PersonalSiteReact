import { pages } from '../constants';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tabLink: {
    color: 'inherit',
  },
});
export const NavTabs = ({ handlePageChange, currentPage }) => {
  const classes = useStyles();
  return (
    <Tabs
      value={currentPage === pages.HOME ? false : currentPage}
      onChange={handlePageChange}
      centered
    >
      {Object.values(pages).map((page) => {
        return page !== pages.HOME && <Tab label={page} value={page} key={page} />;
      })}
      <Tab
        className={classes.tabLink}
        component={Link}
        underline="none"
        href="https://github.com/CiaraSouthgate"
        target="_blank"
        label="GitHub"
        value="github"
        key="github"
      />
      <Tab
        className={classes.tabLink}
        component={Link}
        underline="none"
        href="https://www.linkedin.com/in/ciarasouthgate/"
        target="_blank"
        label="LinkedIn"
        value="linkedin"
        key="linkedin"
      />
    </Tabs>
  );
};
