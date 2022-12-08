import Header from '../component/header/header';
import code from '../images/app/code.svg';
import HelloWorldGif from '../images/projects/helloworld.gif';
import CleanCheeksGif from '../images/projects/cleancheeks.gif';
import ResumeReviewGif from '../images/projects/resumereview.gif';
import ModuleFutureGif from '../images/projects/modulefuture.gif';
import NUSForumsGif from '../images/projects/nusforums.gif';
import PeerPrepGif from '../images/projects/peerprep.gif';
import SortAlgoGif from '../images/projects/sort-algo.gif';
import TourMateImage from '../images/projects/tourmate2.png';
import {
  adobeXdIcon,
  bootstrapIcon,
  cssIcon,
  expressIcon,
  figmaIcon,
  firebaseIcon,
  htmlIcon,
  jsIcon,
  mongodbIcon,
  nestIcon,
  nextauthIcon,
  nextJsIcon,
  nodeJsIcon,
  postgreSQLIcon,
  prismaIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  socketIcon,
  swiftIcon,
  tailwindIcon,
  trpcIcon,
  tsIcon
} from '../util/TechStack';
import SingleProject from './SingleProject';
import './styles.css';

const Projects = () => {
  const projects = [
    {
      gif: ResumeReviewGif,
      name: 'Resume Review Portal',
      description: `
      Resume Review Portal is a platform built for allow to upload their resumes and get feedback
      from the tech community. A collaboration with Tech Interview Handbook and part of 
      CS3216 Software Product Engineering for Digital Markets.
      `,
      appLink: 'https://app.techinterviewhandbook.org/resumes',
      codeLink: 'https://github.com/yangshun/tech-interview-handbook',
      techStack: [reactIcon, tsIcon, nextJsIcon, trpcIcon, prismaIcon, tailwindIcon, nextauthIcon, postgreSQLIcon],
      marginTop: 40,
    },
    {
      gif: CleanCheeksGif,
      name: 'CleanCheeks',
      description: `
      Resume Review Portal is a platform built for allow to upload their resumes and get feedback
      from the tech community. A collaboration with Tech Interview Handbook and part of 
      CS3216 Software Product Engineering for Digital Markets.
      `,
      appLink: 'https://clean-cheeks.vercel.app/',
      codeLink: 'https://github.com/keanecjy/CleanCheeks',
      techStack: [reactIcon, tsIcon, expressIcon, nodeJsIcon, bootstrapIcon, postgreSQLIcon],
      marginTop: 90,
    },
    {
      gif: PeerPrepGif,
      name: 'PeerPrep',
      description: `
        PeerPrep is a live collaborative coding interview platform built for students to
        practise solving coding problems together with their peers. Built with a microservice architecture.
        Built with passion in CS3219 Software Engineering Principles and Patterns.
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
      NUSForums is a NUS-community forum which organises NUS modules into forums whereby
      students and teaching staff can post and answer questions anonymously.
      Built with passion in Hack&Roll 2022.
      `,
      appLink: 'https://nusforums-2a1c8.web.app/',
      codeLink: 'https://github.com/keanecjy/nusforums',
      techStack: [reactIcon, reduxIcon, tsIcon, firebaseIcon, nodeJsIcon],
      marginTop: 90,
    },
    {
      gif: TourMateImage,
      name: 'TourMate',
      description: `
      TourMate is an all-in-one collaborative trip management application that aims to make
      planning group trips fun and effortless. It provides a collaborative planner which supports
      versioning of plans, voting, comments, recommendations, and more! Built with passion in
      CS3217 Software Engineering on Modern Application Platforms.
      `,
      appLink: 'https://github.com/keanecjy/TourMate',
      codeLink: 'https://github.com/keanecjy/TourMate',
      techStack: [swiftIcon, firebaseIcon, figmaIcon],
      marginTop: 90,
    },
    {
      gif: HelloWorldGif,
      name: 'HelloWorld',
      description: `
        HelloWorld is a real-time chat based application built for connecting users around the 
        globe. The application comes with an interactive map display for users to view and 
        connect with users via an intuitive chat interface. Built with passion in Hack&Roll 2021.
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
        to learn and understand sorting algorithms better. The application
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
