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
  tsIcon,
} from '../util/TechStack';
import ProjectItem from './ProjectItem';
import './styles.css';

const ProjectSection = () => {
  const projects = [
    {
      gif: ResumeReviewGif,
      name: 'Resume Review Portal',
      description: `
      Resume Review Portal is a platform built to allow users to upload their resumes and get feedback
      from the tech community. A collaboration with Tech Interview Handbook.
      `,
      appLink: 'https://app.techinterviewhandbook.org/resumes',
      codeLink: 'https://github.com/yangshun/tech-interview-handbook',
      techStack: [
        reactIcon,
        tsIcon,
        nextJsIcon,
        trpcIcon,
        prismaIcon,
        tailwindIcon,
        nextauthIcon,
        postgreSQLIcon,
      ],
    },
    {
      gif: CleanCheeksGif,
      name: 'CleanCheeks',
      description: `
      CleanCheeks is a Progressive Web App built for users to find clean toilets throughout their 
      time in NUS.
      `,
      appLink: 'https://clean-cheeks.vercel.app/',
      codeLink: 'https://github.com/keanecjy/CleanCheeks',
      techStack: [reactIcon, tsIcon, expressIcon, nodeJsIcon, bootstrapIcon, postgreSQLIcon],
    },
    {
      gif: PeerPrepGif,
      name: 'PeerPrep',
      description: `
        PeerPrep is a live collaborative coding interview platform built for students to
        practise solving coding problems together with their peers. Built with a microservice architecture.
      `,
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
    },
    {
      gif: TourMateImage,
      name: 'TourMate',
      description: `
      TourMate is an all-in-one collaborative trip management application that aims to make
      planning group trips fun and effortless. It provides a collaborative planner which supports
      versioning of plans, voting, comments, recommendations, and more!
      `,
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
    },
  ];

  return (
    <div className="projects">
      <Header title="Projects" icon={<img src={code} alt="" height="54em" width="auto" />} />
      <div className="project-list">
        {projects.map((proj) => (
          <ProjectItem props={proj} key={proj.name} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
