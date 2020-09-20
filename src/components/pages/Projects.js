import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import 'App.css';
import { projectsList } from '../../assets/constants/projectsList';
import useTheme from '@material-ui/core/styles/useTheme';
import AwesomeSlider from 'react-awesome-slider/src/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    padding: `${theme.spacing(2)}px 0`,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.container}>
      {projectsList.map((project) => {
        return (
          <div>
            <Typography variant="h3">{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <AwesomeSlider>
              media={[{ source: project.images[0] }, { source: project.images[1] }]}
              {/*{project.images.map((image) => {*/}
              {/*  return <div data-src={image.path} />;*/}
              {/*})}*/}
            </AwesomeSlider>
            {/*<ImageGallery className={classes.imageGallery} images={project.images} />*/}
          </div>
        );
      })}
    </Container>
  );
};
