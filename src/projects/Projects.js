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
import ModuleFuture from '../images/ModuleFuture.png';

const Projects = () => {

  const projects = [
    {
      img: ModuleFuture,
      name: 'ModuleFuture',
      description:
        'ModuleFuture is a module planning mobile application designed for NUS students to plan ' +
        'and track their modules. It helps students manage and plan their modules in advance, ' +
        'and provides recommendations for specialization paths based on in-depth statistics ' +
        'from the modules taken by users.',
      appLink: 'https://play.google.com/store/apps/details?id=com.modulefuture2019.ModuleFuture',
      codeLink: 'https://github.com/keanecjy/ModuleFuture',
      techStack: [reactIcon, jsIcon, firebaseIcon, adobeXdIcon],
    },
    {
      img: ModuleFuture,
      name: 'SortAlgo',
      description:
        'SortAlgo is a sorting visualizer web application created for students to learn and' +
        'understand sorting algorithms better.',
      appLink: 'https://algosort.netlify.app/',
      codeLink: 'https://github.com/keanecjy/sort-algo',
      techStack: [reactIcon, jsIcon, cssIcon, htmlIcon, adobeXdIcon],
    },
    {
      img: ModuleFuture,
      name: 'InternHunter',
      description:
        'An internship management application built for students to get the internship they desire. ' +
        'Optimized for fast typists.',
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
