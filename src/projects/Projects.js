import React from 'react';
import './styles.css';
import SingleProject from './SingleProject';
import {
  adobeXdIcon,
  cssIcon,
  expressIcon,
  firebaseIcon,
  htmlIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  mongodbIcon,
  nodeJsIcon,
  reactIcon,
  reduxIcon,
  socketIcon,
} from '../util/TechStack';
import ModuleFutureGif from '../images/modulefuture.gif';
import SortAlgoGif from '../images/sort-algo.gif';
import InternHunterGif from '../images/internhunter.gif';
import HelloWorldGif from '../images/helloworld.gif';
import { FaLaptopCode } from 'react-icons/all';
import Header from '../component/header/header';

const Projects = () => {
  const projects = [
    {
      gif: HelloWorldGif,
      name: 'HelloWorld',
      description:
        'HelloWorld is a real-time chat based application built for connecting users around the ' +
        'globe. This project was inspired due to the frustration and ongoing boredom people' +
        'face during the COVID-19 pandemic. The application comes with an interactive map ' +
        'display for users to view and connect with users via a real-time chat interface.',
      appLink: 'https://helloworld-hnr.netlify.app/',
      codeLink: 'https://github.com/keanecjy/HelloWorld',
      techStack: [reactIcon, reduxIcon, jsIcon, nodeJsIcon, expressIcon, socketIcon, mongodbIcon],
      marginTop: 40,
    },
    {
      gif: SortAlgoGif,
      name: 'SortAlgo',
      description:
        'SortAlgo is an interactive sorting visualizer web application created for students ' +
        'to learn and understand sorting algorithms better. This project was inspired from the ' +
        'lack of visual representation when students learn sorting algorithms. The application ' +
        'provides 10 sorting algorithms, each with its own unique animation and ' +
        'step-by-step explanation.',
      appLink: 'https://algosort.netlify.app/',
      codeLink: 'https://github.com/keanecjy/sort-algo',
      techStack: [reactIcon, reduxIcon, nodeJsIcon, jsIcon, cssIcon, htmlIcon, adobeXdIcon],
      marginTop: 90,
    },
    {
      gif: ModuleFutureGif,
      name: 'ModuleFuture',
      description:
        'ModuleFuture is a module planning mobile application designed for NUS students to plan ' +
        'and track their modules. It helps students manage and plan their modules in advance, ' +
        'and provides recommendations for specialization paths based on in-depth statistics ' +
        'from the modules taken by users.',
      appLink: 'https://github.com/keanecjy/ModuleFuture#features-preview',
      codeLink: 'https://github.com/keanecjy/ModuleFuture',
      techStack: [reactIcon, jsIcon, nodeJsIcon, firebaseIcon, cssIcon, htmlIcon, adobeXdIcon],
      marginTop: 90,
    },
    {
      gif: InternHunterGif,
      name: 'InternHunter',
      description:
        'InternHunter is an internship management application built for students to get the ' +
        'internship they desire. It is built and optimized for fast typists to record and ' +
        'track their internship applications and resume details.',
      appLink: 'https://github.com/keanecjy/tp#internhunter',
      codeLink: 'https://github.com/keanecjy/tp',
      techStack: [javaIcon, javaFxIcon, cssIcon, adobeXdIcon],
      marginTop: 90,
    },
  ];

  return (
    <div className="projects">
      <Header title={'Projects'} icon={<FaLaptopCode color={'#a47070'} size={'2em'} />} />
      {projects.map((proj) => (
        <SingleProject props={proj} key={proj.name} />
      ))}
    </div>
  );
};

export default Projects;
