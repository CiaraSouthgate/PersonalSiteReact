import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import PYCS from '../../assets/images/projects/Pathfinder/home.png';
import Wizard from '../../assets/images/projects/WizardScorekeeper/WizardScorekeeper.png';
import RoyalCityBL from '../../assets/images/projects/RoyalCityBuildingLens/ar_phone.png';
import MMHome from '../../assets/images/projects/MedManager/home.png';
import 'App.css';
import { useMediaQuery } from '@material-ui/core';

const projectsList = [
  {
    title: 'Wizard Scorekeeper',
    repo: 'https://github.com/CiaraSouthgate/WizardScorerAndroid',
    description: [
      <>
        <Typography>
          I'm a big fan of board and card games, and Wizard is one that I quite enjoy...as long as
          someone else does the scoring. I figured there had to be an app to score the game, but
          none of the available offerings were quite what I wanted. The only solution? Build my own.
        </Typography>
        <br />
        <Typography>
          This was a really fun project for me, because at the time I started it, I had never done
          any Android development at all. I did a lot of learning as I went, but eventually ended up
          with an app that's useful not only for me, but for others as well.
        </Typography>
        <br />
        <Typography>
          Using the knowledge I've acquired since I first created the app, I've been working on
          version 2.0, which will include alternate rule sets and game modes and will be available
          on the Play Store soon. In the meantime, check out the original!
        </Typography>
        <Link
          className="playBadge"
          href="https://play.google.com/store/apps/details?id=com.ciarasouthgate.wizardscorekeeper&hl=en_CA&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
        >
          <img
            className="playBadge"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </Link>
      </>,
    ],
    image: {
      src: Wizard,
      alt: 'Wizard Scorekeeper for Android',
      mobile: true,
    },
  },
  {
    title: 'PYCS Database App',
    repo: 'https://github.com/CiaraSouthgate/PYCSDatabaseApp',
    description: [
      <>
        <Typography>
          The Pathfinder Youth Society Centre database app was created for a project practicum term
          through BCIT's{' '}
          <Link
            underline="always"
            color="inherit"
            href="https://www.bcit.ca/computing-academic-studies/industry-sponsored-student-projects/"
            target="_blank"
          >
            Industry Sponsored Student Projects
          </Link>{' '}
          program, which pairs teams of students with an industry sponsor to develop a software
          solution that meets the sponsor's needs. For this project, I worked with a group of three
          other students. All of the work was done remotely due to the COVID-19 pandemic.
        </Typography>
        <br />
        <Typography>
          Pathfinder Youth Centre Society is a non-profit that specializes in mentoring at-risk
          youth to help them gain employment. Before this project, they were storing their
          participants' data in a combination of Excel spreadsheets and paper forms, which made
          sharing information between offices cumbersome and prevented them from being able to store
          data long-term. They needed a new system - one that was easy to use, secure, and
          accessible from all of their offices.
        </Typography>
        <br />
        <Typography>
          Although we only had five weeks to work on the project, we were able to create a solution
          that met their needs and that they were very happy with. Using a combination of ReactJS,
          Cloud Firestore, and Firebase Hosting, we created an easy-to-use database application with
          a linked intake form that should be sustainable for a long time to come. Our solution was
          so successful that{' '}
          <Link
            underline="always"
            color="inherit"
            href="https://commons.bcit.ca/news/2020/07/issp-pathfinder-youth-centre-society/"
            target="_blank"
          >
            BCIT News wrote a feature on it
          </Link>{' '}
          to promote the ISSP program.
        </Typography>
      </>,
    ],
    image: {
      src: PYCS,
      alt: 'Pathfinder Youth Society Centre Database App',
      mobile: false,
    },
  },
  {
    title: 'Royal City Building Lens',
    repo: 'https://github.com/CiaraSouthgate/RoyalCityBuildingLens',
    description: [
      <>
        <Typography>
          Royal City Building lens was the term project for my Android course. I worked with two
          other students to create it. Using datasets from the City of New Westminster, the Google
          Maps API, and Google's ARCore library, we created an app that allows the user to walk
          around New Westminster, point their phone at a building, and learn details about it such
          as its name, the year it was built, and its square footage.
        </Typography>
        <br />
        <Typography>
          The pandemic forced us to switch to online learning halfway through the project, which
          created some interesting challenges, as I was the only member of the group who both had an
          Android phone and lived in New West. This meant that any time one of my groupmates made a
          change, I would have to test it and work with them to debug any issues that arose. Despite
          this complication, we were able to make it work, but I think the final product would have
          been more polished under different circumstances.
        </Typography>
      </>,
    ],
    image: {
      src: RoyalCityBL,
      alt: 'AR activity',
      mobile: true,
    },
  },
  {
    title: 'MedManager',
    repo: 'https://github.com/CiaraSouthgate/MedManager',
    description: [
      <>
        <Typography>
          MedManager was my first major project at BCIT, created during a projects course in my
          first term alongside two other students. It's a web app designed to help users keep track
          of their daily medications.
        </Typography>
        <br />
        <Typography>
          MedManager is build using HTML, CSS, JavaScript, and jQuery with Bootstrap for styling.
          The database is a Firebase Realtime Database and it's also hosted on Firebase. Because we
          did this project so early in the program, we were very much learning as we went, both
          about the tech that we were using and about Agile processes.
        </Typography>
        <br />
        <Typography>
          {' '}
          Feel free to{' '}
          <Link
            color="inherit"
            underline="always"
            href="https://medmanager-9a443.web.app/"
            target={'_blank'}
          >
            check it out
          </Link>
          , but don't upload any sensitive information - because this was a first-term project, we
          never got quite as far as adding security!
        </Typography>
      </>,
    ],
    image: {
      src: MMHome,
      alt: 'MedManager user home screen',
      mobile: false,
    },
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    padding: `${theme.spacing(2)}px 0`,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    '& h3': {
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  },
  contentDiv: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
  desktopImage: {
    width: '55%',
    height: 'auto',
    float: 'right',
    marginLeft: theme.spacing(2),
    border: `5px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      float: 'none',
      width: '100%',
      margin: `${theme.spacing(1)}px 0`,
    },
  },
  mobileImage: {
    width: '30%',
    maxWidth: '12em',
    height: 'auto',
    position: 'relative',
    float: 'left',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      float: 'none',
      width: '90%',
      alignSelf: 'center',
      marginRight: 0,
    },
  },
  githubIcon: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(1)}px auto`,
      display: 'block',
    },
  },
  header: {
    textAlign: 'center',
  },
  dialog: {
    outline: 'none',
  },
  dialogImage: {
    maxHeight: '85vh',
    maxWidth: '85vw',
    height: '100%',
    display: 'block',
    width: 'auto',
    objectFit: 'contain',
  },
}));

export const Projects = () => {
  const classes = useStyles();

  // const [dialogContents, setDialogContents] = useState(null);
  // const [dialogOpen, setDialogOpen] = useState(false);
  //
  // const openDialog = (image) => {
  //   setDialogContents(<img className={classes.dialogImage} src={image.src} alt={image.alt} />);
  //   setDialogOpen(true);
  // };
  //
  // const closeDialog = () => {
  //   setDialogOpen(false);
  // };

  return (
    <>
      {/*<Modal className={classes.dialog} disableAutoFocus open={dialogOpen} onClose={closeDialog}>*/}
      {/*  {dialogContents}*/}
      {/*</Modal>*/}
      <Container className={classes.container}>
        {useMediaQuery(useTheme().breakpoints.down('sm')) && (
          <>
            <Divider />
            <Typography className={classes.header} variant="h2">
              Projects
            </Typography>
            <Divider />
            <br />
          </>
        )}
        {projectsList.map((project, index) => {
          const image = project.image;
          return (
            <div key={project.title}>
              <Typography variant="h3">
                {project.title}
                <Link color="inherit" href={project.repo} target="_blank">
                  <GitHubIcon className={classes.githubIcon} fontSize="large" />
                </Link>
              </Typography>
              <div className={classes.contentDiv}>
                <img
                  className={image.mobile ? classes.mobileImage : classes.desktopImage}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => {
                    // openDialog(image);
                  }}
                />
                {project.description}
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
};
