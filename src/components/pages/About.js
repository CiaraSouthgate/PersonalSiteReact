import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PennyPic from 'assets/images/penny.png';
import 'App.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    padding: `${theme.spacing(2)}px 0`,
  },
  aboutDiv: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    width: '100%',
    float: 'left',
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
  pennyPic: {
    width: '30%',
    maxWidth: '260px',
    minWidth: '120px',
    height: 'auto',
    borderRadius: '50%',
    float: 'right',
    shapeOutside: 'circle(50%)',
    marginLeft: theme.spacing(1),
    border: `5px solid ${theme.palette.primary.main}`,
  },
}));

const StyledToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);

export const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.aboutDiv}>
        <Typography variant="h3">
          Hey, I'm{' '}
          <StyledToolTip title={'(kee-ra)'}>
            <span>Ciara*</span>
          </StyledToolTip>
          . It's nice to meet you.
        </Typography>
        <Typography>
          I'm a software developer located in the Vancouver, BC area. As of December 2020, I'll be a
          graduate of the Computer Systems Technology Diploma at the British Columbia Institute of
          Technology with a specialization in Artificial Intelligence and Machine Learning.
        </Typography>
        <br />
        <Typography>
          I got into software because I love a good puzzle. It started with an online Python course
          that I took to get a feel for programming. After I finished it, I wanted to learn more and
          decided to look into computing programs. I found exactly what I was looking for in CST - a
          hands-on, fast paced program with an emphasis on preparing students for work in the real
          world. As sheer coincidence would have it, I learned about CST the day before applications
          closed for the semester. The perfect timing was too good to pass up, so I applied right
          away and the rest is history.
        </Typography>
        <br />
        <img className={classes.pennyPic} src={PennyPic} alt="My dog, Penny" />
        <Typography>
          Besides programming, my interests include board games, RPGs, 3D printing, cooking, baking,
          and music. I'm ruled over by a 25 pound terrier cross named Penelope (Penny for short),
          who is pretty much the cutest thing that ever existed.
        </Typography>
        <br />
        <Typography>
          Some fun facts about me:
          <ul>
            <li>I could fly a plane before I could drive a car.</li>
            <li>I studied bassoon performance for three years.</li>
            <li>In my spare time, I like to make dice.</li>
            <li>My favourite board game weighs about as much as my dog.</li>
            <li>
              I spent over 200 hours volunteering on the crisis line for{' '}
              <Link className={classes.link} href="https://www.wavaw.ca/">
                WAVAW Rape Crisis Centre
              </Link>
              .
            </li>
          </ul>
        </Typography>
      </div>
    </Container>
  );
};
