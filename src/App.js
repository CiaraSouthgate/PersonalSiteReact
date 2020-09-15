import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import { Background, NavBar, NavMenu, NavTabs } from 'components';
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
  },
}));

const App = () => {
  const classes = useStyles();
  const appPages = pages;

  const [currentPage, setCurrentPage] = useState(appPages.HOME);
  const [loaded, setLoaded] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);

  const handlePageChange = (event, newValue) => {
    if (currentPage !== newValue) {
      setCurrentPage(newValue);
    }
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const handleScroll = (newValue) => {
    if (Object.values(appPages).includes(newValue)) {
      setCurrentPage(newValue);
      scrollToRef(newValue);
    }
  };

  useEffect(() => {
    const megrim = new Observer('Megrim');
    const openSans = new Observer('Open Sans');

    Promise.all([megrim.load(), openSans.load()]).then(function () {
      setLoaded(true);
    });
  });

  return (
    <ThemeProvider theme={theme}>
      {useMediaQuery(useTheme().breakpoints.down('sm')) ? (
        <div>
          <NavBar
            showName={false}
            navigation={<NavMenu pages={appPages} handlePageChange={handleScroll} />}
          />
          <Background
            content={loaded ? appPages.HOME.component : <Loading />}
            dimBackground={false}
          />
          <Divider />
          <Background
            content={Object.values(appPages).map((page) => {
              return (
                <div>
                  {page !== appPages.HOME && page.component}
                  <Divider variant="middle" />
                </div>
              );
            })}
            dimBackground={true}
          />
          <Zoom
            in={fabVisible}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${fabVisible ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab size="large" color="secondary" className={classes.fab}>
              <ArrowUpwardIcon />
            </Fab>
          </Zoom>
        </div>
      ) : (
        <>
          <NavBar
            showName={currentPage !== appPages.HOME}
            navigation={
              <NavTabs
                pages={appPages}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
              />
            }
          />
          <Background
            content={loaded ? currentPage.component : <Loading />}
            backgroundImageClass={
              currentPage === appPages.HOME ? 'blueBackground' : 'blueBackground-NoLine'
            }
            dimBackground={currentPage !== appPages.HOME}
          />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
