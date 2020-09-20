import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { SkillCategory } from '../SkillCategory';
import { skillsList } from 'assets/constants';
import 'App.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    padding: `${theme.spacing(2)}px 0`,
  },
  skillsDiv: {
    marginBottom: theme.spacing(3),
    textAlign: 'justify',
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
  collapseButton: {
    color: theme.palette.primary.contrastText,
  },
}));

export const Skills = () => {
  const classes = useStyles();
  const [listExpanded, setListExpanded] = useState(false);

  const expandAll = () => {
    setListExpanded(true);
  };

  const collapseAll = () => {
    setListExpanded(false);
  };

  const onExpandChanged = () => {
    setListExpanded(null);
  };

  return (
    <Container className={classes.container}>
      <div className={`${classes.skillsDiv}`}>
        <Grid container justify="space-between" direction="row" alignItems="center">
          <Grid item xs={6} lg="auto">
            <Typography variant="h3">Skills</Typography>
          </Grid>
          <Grid item xs={6} lg="auto">
            <ButtonGroup variant="text">
              <Button className={classes.collapseButton} onClick={expandAll}>
                Expand All
              </Button>
              <Button className={classes.collapseButton} onClick={collapseAll}>
                Collapse All
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Typography>
          These are some of the technologies I have experience working with, whether through school,
          my co-op, or personal projects. This list isn't exhaustive - there are things I've worked
          with that aren't here, but these are the ones I'm most comfortable with.
        </Typography>
        <List>
          {skillsList.map((category) => {
            return (
              <SkillCategory
                category={category}
                key={category.title}
                expanded={listExpanded}
                onChange={onExpandChanged}
              />
            );
          })}
        </List>
      </div>
      <div className={`${classes.skillsDiv}`}>
        <Typography variant="h3">Work Experience</Typography>
        <Typography variant="body1">
          In 2019, I had the pleasure of doing an eight-month work term as a{' '}
          <b>QA Engineer Co-op</b> for <b>Incognito Software Systems</b>. In addition to creating,
          maintaining, and updating automated test suites using <b>Java</b> and <b>JUnit</b>, I got
          to work with various other technologies to develop testing tools for my team's products,
          including <b>Ansible</b>, <b>Docker</b>, and <b>Jenkins</b>.
        </Typography>
        <br />
        <Typography variant="body1">
          While enrolled at BCIT, I've worked as a <b>peer tutor</b>, tutoring both writing and
          computing.
        </Typography>
        <br />
        <Typography variant="body1">
          In the past, I've worked in <b>customer service</b>, <b>retail management</b>, and{' '}
          <b>animal care</b>.
        </Typography>
        <br />
        <Typography variant="body1">
          If you'd like to know more about my work experience, please{' '}
          <Link className={classes.link} href={'https://www.linkedin.com/in/ciarasouthgate/'}>
            visit my LinkedIn
          </Link>{' '}
          or{' '}
          <Link className={classes.link} href={'mailto:hello@ciarasouthgate.com'}>
            contact me
          </Link>{' '}
          for my full resume.
        </Typography>
      </div>
    </Container>
  );
};
