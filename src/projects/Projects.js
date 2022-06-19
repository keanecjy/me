import React from 'react';
import Header from '../component/header/header';
import code from '../images/app/code.svg';
import HelloWorldGif from '../images/projects/helloworld.gif';
import InternHunterGif from '../images/projects/internhunter.gif';
import ModuleFutureGif from '../images/projects/modulefuture.gif';
import NUSForumsGif from '../images/projects/nusforums.gif';
import PeerPrepGif from '../images/projects/peerprep.gif';
import SortAlgoGif from '../images/projects/sort-algo.gif';
import TourMateImage from '../images/projects/tourmate2.png';
import {
  adobeXdIcon,
  cssIcon,
  expressIcon,
  firebaseIcon,
  gradleIcon,
  htmlIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  mongodbIcon,
  nestIcon,
  nodeJsIcon,
  postgreSQLIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  socketIcon,
  swiftIcon,
  tsIcon,
} from '../util/TechStack';
import SingleProject from './SingleProject';
import './styles.css';

const Projects = () => {
  const projects = [
    {
      gif: TourMateImage,
      name: 'TourMate',
      description: `
      TourMate is an all-in-one collaborative trip management application that aims to make
      planning group trips fun and effortless. It provides a collaborative planner which supports
      versioning of plans, voting, comments, recommendations, and more!
      `,
      appLink: 'https://github.com/keanecjy/TourMate',
      codeLink: 'https://github.com/keanecjy/TourMate',
      techStack: [swiftIcon, firebaseIcon, adobeXdIcon],
      marginTop: 40,
    },
    {
      gif: PeerPrepGif,
      name: 'PeerPrep',
      description: `
        PeerPrep is a live collaborative coding interview platform built for students to
        practise solving coding problems together with their peers. This project aims to break
        the monotony of revising for coding interviews alone and allows students to prepare and learn
        alongside their peers.
      `,
      appLink: 'https://github.com/keanecjy/PeerPrep',
      codeLink: 'https://github.com/keanecjy/PeerPrep',
      techStack: [reactIcon, reduxIcon, tsIcon, nestIcon, redisIcon, postgreSQLIcon, socketIcon],
      marginTop: 90,
    },
    {
      gif: NUSForumsGif,
      name: 'NUSForums',
      description: `
      NUSForums is a NUS-community web-based forum. It organises NUS modules into forums whereby
      students and teaching staff can post and answer questions anonymously. The project was inspired
      from the lack of an intuitive, standardised platform for NUS students to freely ask module-specific
      questions. 
      `,
      appLink: 'https://nusforums-2a1c8.web.app/',
      codeLink: 'https://github.com/keanecjy/nusforums',
      techStack: [reactIcon, reduxIcon, tsIcon, firebaseIcon, nodeJsIcon],
      marginTop: 90,
    },
    {
      gif: HelloWorldGif,
      name: 'HelloWorld',
      description: `
        HelloWorld is a real-time chat based application built for connecting users around the 
        globe. This project was inspired from the ongoing frustration and boredom people 
        face during the COVID-19 pandemic. The application comes with an interactive map 
        display for users to view and connect with users via an intuitive chat interface.
      `,
      appLink: 'https://helloworld-hnr.netlify.app/',
      codeLink: 'https://github.com/keanecjy/HelloWorld',
      techStack: [reactIcon, jsIcon, nodeJsIcon, expressIcon, mongodbIcon, socketIcon],
      marginTop: 90,
    },
    {
      gif: SortAlgoGif,
      name: 'SortAlgo',
      description: `
        SortAlgo is an interactive sorting visualizer web application created for students 
        to learn and understand sorting algorithms better. This project was inspired from the 
        lack of visual representation when students learn sorting algorithms. The application
        provides 10 sorting algorithms, each with its own unique animation and
        step-by-step explanation.
      `,
      appLink: 'https://algosort.netlify.app/',
      codeLink: 'https://github.com/keanecjy/sort-algo',
      techStack: [reactIcon, jsIcon, nodeJsIcon, cssIcon, htmlIcon, adobeXdIcon],
      marginTop: 90,
    },
    {
      gif: ModuleFutureGif,
      name: 'ModuleFuture',
      description: `
        ModuleFuture is a module planning mobile application designed for NUS students to plan 
        and track their modules. It helps students manage and plan their modules in advance, 
        and provides recommendations for specialization paths based on in-depth statistics 
        from the modules taken by users.
        `,
      appLink: 'https://github.com/keanecjy/ModuleFuture#features-preview',
      codeLink: 'https://github.com/keanecjy/ModuleFuture',
      techStack: [reactIcon, jsIcon, nodeJsIcon, firebaseIcon, cssIcon, htmlIcon, adobeXdIcon],
      marginTop: 90,
    },
    {
      gif: InternHunterGif,
      name: 'InternHunter',
      description: `
        InternHunter is an internship management application built for students to get their 
        dream internship! It is built and optimized for fast typists to record and 
        track their internship applications and resume details.
      `,
      appLink: 'https://github.com/keanecjy/tp#internhunter',
      codeLink: 'https://github.com/keanecjy/tp',
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon, adobeXdIcon],
      marginTop: 90,
    },
  ];

  return (
    <div className="projects">
      <Header title={'Projects'} icon={<img src={code} alt="" height="54em" width="auto" />} />
      {projects.map((proj) => (
        <SingleProject props={proj} key={proj.name} />
      ))}
    </div>
  );
};

export default Projects;
