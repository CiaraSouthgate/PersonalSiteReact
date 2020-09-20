import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import { NavBar, NavMenu, NavTabs, PageContainer } from 'components';
import { pages } from 'assets/constants';
import Observer from 'fontfaceobserver';
import './App.css';
import { Loading } from './components/pages/Loading';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import { Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    opacity: 0.7,
  },
}));

const App = () => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(pages.PROJECTS);
  const [loaded, setLoaded] = useState(false);
  let mobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  useEffect(() => {
    const megrim = new Observer('Megrim');
    const openSans = new Observer('Open Sans');

    Promise.all([megrim.load(), openSans.load()]).then(function () {
      setLoaded(true);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (mobile) {
      const position = window.scrollY;
      for (let key of Object.keys(pages)) {
        const page = pages[key];
        const element = document.getElementById(page.name);
        const top = element.offsetTop;
        const bottom = top + element.scrollHeight;

        if (position > top && position < bottom) {
          setCurrentPage(pages[key]);
          return;
        }
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (event, page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const handleNavMenuClicked = (elementName) => {
    const element = document.getElementById(elementName);
    window.scrollTo({ top: element.offsetTop + 1, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      {mobile ? (
        <div>
          <NavBar
            showName={false}
            navigation={
              <NavMenu handlePageChange={handleNavMenuClicked} currentPage={currentPage} />
            }
          />
          <div id={pages.HOME.name}>
            <PageContainer
              content={loaded ? pages.HOME.component : <Loading />}
              dimBackground={false}
            />
          </div>
          <Divider />
          <PageContainer
            content={Object.values(pages).map((page) => {
              return (
                page !== pages.HOME && (
                  <div id={page.name} key={page.name}>
                    {page.component}
                  </div>
                )
              );
            })}
            dimBackground={true}
          />
          <Zoom
            in={currentPage !== pages.HOME}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${currentPage !== pages.HOME ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab className={classes.fab} size="large" color="secondary" onClick={scrollToTop}>
              <ArrowUpwardIcon />
            </Fab>
          </Zoom>
        </div>
      ) : (
        <>
          <NavBar
            showName={currentPage !== pages.HOME}
            buttons
            navigation={<NavTabs handlePageChange={handlePageChange} currentPage={currentPage} />}
          />
          <PageContainer
            content={loaded ? currentPage.component : <Loading />}
            backgroundImageClass={
              currentPage === pages.HOME ? 'blueBackground' : 'blueBackground-NoLine'
            }
            dimBackground={currentPage !== pages.HOME}
          />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
