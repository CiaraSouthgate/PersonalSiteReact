import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';
import 'App.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    padding: `${theme.spacing(2)}px 0`,
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
}));

export const Projects = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h3">Projects</Typography>
      <Typography>
        This section is under construction. In the meantime, feel free to visit my{' '}
        <Link className={classes.link} href="https://github.com/CiaraSouthgate">
          GitHub page
        </Link>{' '}
        to see some of the projects I've worked on.
      </Typography>
    </Container>
  );
};
