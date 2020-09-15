import { About, Home, Projects, Skills } from 'components/pages';
import React from 'react';

export const pages = {
  HOME: { name: 'Home', component: <Home key="home" />, index: 0 },
  ABOUT: { name: 'About', component: <About key="about" />, index: 1 },
  SKILLS: { name: 'Skills & Experience', component: <Skills key="skills" />, index: 2 },
  PROJECTS: { name: 'Projects', component: <Projects key="projects" />, index: 3 },
};
