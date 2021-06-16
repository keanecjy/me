import {
  cssIcon,
  dockerIcon,
  firebaseIcon,
  gradleIcon,
  grpcIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  nodeJsIcon,
  postgreSQLIcon,
  reactIcon,
  springIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import React from 'react';
import SingleExperience from './SingleExperience';
import './styles.css';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';
import portfolio from '../images/app/portfolio.svg';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Engineer Intern (Backend)',
      company: 'TransferWise',
      companyLink: 'https://wise.com/',
      period: 'May 2021 - Present',
      desc: [
        'Reduced percentage of failed gRPC errors by 90% in 2 weeks by redesigning and implementing multiple backend gRPC API endpoints across several Java Spring Boot microservices',
        'Spearheaded the migration of a REST API endpoint to increase scalability and shift logic towards backend to resolve platform bugs',
        'Leverage knowledge in REST API Design, API migration, microservices development and Unit and Integration testing',
      ],
      techStack: [javaIcon, springIcon, grpcIcon, postgreSQLIcon, gradleIcon, dockerIcon],
      marginTop: 40,
    },
    {
      position: 'Software Engineer',
      company: 'SE-EDU',
      companyLink: 'https://se-education.org/',
      period: 'Jan 2021 - May 2021',
      desc: [
        'Collaborated with a team of 6 developers to maintain and improve multiple open-source software used by 800 NUS students per day',
        'Conducted and coordinated code and design documentation reviews for features developed and bugs fixed',
        'Leveraged knowledge in Software Design Patterns and Principles, Unit and Integration testing and Jackson JSON',
      ],
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon],
      marginTop: 100,
    },
    {
      position: 'Project Advisor',
      // To handle small screens since the text becomes too long
      company: window.screen.width > 760 ? 'National University of Singapore' : 'NUS',
      companyLink: 'https://nus.edu.sg/',
      period: 'May 2021 - Present',
      desc: [
        'Manage and oversee development of 6 full stack web and mobile development projects',
        'Teach and guide students on Software Development Life Cycle, OO design and Agile methodology',
      ],
      techStack: [javaIcon, springIcon, reactIcon, jsIcon, nodeJsIcon, firebaseIcon],
      marginTop: 100,
    },
  ];

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="experience" style={transitionHorizontal(isVisible, -300)}>
          <Header
            title={'Experience'}
            icon={<img src={portfolio} alt="" height="64em" width="auto" />}
            yVal={14}
          />
          {experiences.map((exp) => (
            <SingleExperience props={exp} key={exp.company} />
          ))}
        </div>
      )}
    </IsVisible>
  );
};

export default Experience;
