import React from 'react';
import './styles.css';
import SingleProject from './SingleProject';
import {
  adobeXdIcon,
  cssIcon,
  firebaseIcon,
  htmlIcon, javaFxIcon,
  javaIcon,
  jsIcon,
  reactIcon,
} from '../util/TechStack';

const Projects = () => {

  const projects = [
    {
      img: null,
      name: 'ModuleFuture',
      description:
        'A module planning application designed for NUS students to plan ' +
        'and track their modules',
      appLink: 'https://play.google.com/store/apps/details?id=com.modulefuture2019.ModuleFuture',
      codeLink: 'https://github.com/keanecjy/ModuleFuture',
      techStack: [reactIcon, jsIcon, firebaseIcon, adobeXdIcon],
    },
    {
      img: null,
      name: 'SortAlgo',
      description:
        'A sorting visualizer web application created for everyone to learn and understand ' +
        'sorting algorithms better',
      appLink: 'https://algosort.netlify.app/',
      codeLink: 'https://github.com/keanecjy/sort-algo',
      techStack: [reactIcon, jsIcon, cssIcon, htmlIcon, adobeXdIcon],
    },
    {
      img: null,
      name: 'InternHunter',
      description:
        'An internship management application built for fast typists',
      appLink: 'https://github.com/AY2021S1-CS2103T-T15-4/tp/releases/tag/v1.4',
      codeLink: 'https://github.com/keanecjy/tp',
      techStack: [javaIcon, javaFxIcon, cssIcon, adobeXdIcon],
    },
  ];

  return (
    <div id="#projects" className="projects">
      <h1>Projects</h1>
      {projects.map(proj => <SingleProject props={proj} key={proj.name} />)}
    </div>
  );
};

export default Projects;
