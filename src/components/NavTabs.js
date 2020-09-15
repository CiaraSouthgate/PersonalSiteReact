import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { LinkButtons } from './LinkButtons';

export const NavTabs = ({ pages, handlePageChange, currentPage }) => {
  return (
    <>
      <Tabs
        value={currentPage === pages.HOME ? false : currentPage}
        onChange={handlePageChange}
        centered
      >
        {Object.values(pages).map((page) => {
          return page !== pages.HOME && <Tab label={page.name} value={page} key={page.name} />;
        })}
      </Tabs>
      <LinkButtons size="small" />
    </>
  );
};
