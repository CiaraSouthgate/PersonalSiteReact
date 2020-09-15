import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

export const externalLinks = {
  linkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ciarasouthgate/',
    icon: <LinkedInIcon />,
  },
  gitHub: {
    name: 'GitHub',
    url: 'https://github.com/CiaraSouthgate',
    icon: <GitHubIcon />,
  },
  mail: {
    name: 'Email',
    url: 'mailto:hello@ciarasouthgate.com',
    icon: <MailIcon />,
  },
};
