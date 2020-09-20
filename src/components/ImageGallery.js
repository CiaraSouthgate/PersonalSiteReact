import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton } from '@material-ui/core';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import 'App.css';

const useStyles = makeStyles((theme) => ({
  containerFull: {
    margin: theme.spacing(2),
    position: 'relative',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageFade: {
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'relative',
  },
  image: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  arrow: {
    filter: 'drop-shadow(1px 1px 1px #222)',
    height: 'auto',
    width: 'auto',
  },
  icon: {
    height: '30px',
    width: 'auto',
  },
  rightArrow: {},
}));

export const ImageGallery = ({ images, size = 'full' }) => {
  const classes = useStyles();
  const [imageIndex, setImageIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[imageIndex]);
  }, [images, imageIndex]);

  const toNext = () => {
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
  };

  const toPrevious = () => {
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
  };

  return (
    <div className={classes.containerFull}>
      <CSSTransitionGroup
        className={classes.imageFade}
        transitionName="fade"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={199}
        unmountOnExit
      >
        <img
          className={classes.image}
          src={activeImage.src}
          key={activeImage.src}
          alt={activeImage.alt}
        />
      </CSSTransitionGroup>

      <div className={classes.overlay}>
        <IconButton className={classes.arrow} onClick={toNext}>
          <ChevronLeftIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.arrow} onClick={toPrevious}>
          <ChevronRightIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};
