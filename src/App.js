import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import './App.css';
import { Background, NavBar } from './shared';
import { pages } from './constants';
import Observer from 'fontfaceobserver';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { About, Contact, Home, Projects } from './pages';

const useStyles = makeStyles({
  progress: {
    width: '60%',
  },
});

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(pages.HOME);
  const [pageContent, setPageContent] = React.useState(<Home />);
  const [loaded, setLoaded] = React.useState(false);

  const classes = useStyles();

  const handlePageChange = (event, newValue) => {
    if (Object.values(pages).includes(newValue)) setCurrentPage(newValue);
    console.log(newValue);
    switch (newValue) {
      case pages.ABOUT:
        setPageContent(<About />);
        break;
      case pages.CONTACT:
        setPageContent(<Contact />);
        break;
      case pages.PROJECTS:
        setPageContent(<Projects />);
        break;
      case 'github':
      case 'linkedin':
        break;
      default:
        setPageContent(<Home />);
        break;
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
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Background
        content={
          loaded ? (
            pageContent
          ) : (
            <Grid container alignItems="center" justify="center">
              <LinearProgress className={classes.progress} color="secondary" />
            </Grid>
          )
        }
      />
    </ThemeProvider>
  );
};

export default App;
