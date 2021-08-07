import {
  cssIcon,
  dockerIcon,
  firebaseIcon,
  gitIcon,
  gradleIcon,
  groovyIcon,
  grpcIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  kafkaIcon,
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
      period: 'May 2021 - Aug 2021',
      desc: [
        'Spearheaded the launch of a smart replacement feature that allow users to replace their debit cards for free, decreasing card order flow dropouts and customer complaints on card replacement fee issues',
        'Designed and implemented the new versions of REST and gRPC API endpoints across multiple Java Spring Boot microservices to improve scalability and latency',
        'Eliminated repeated retry tasks to generate debit card numbers and contributed to an increase in card generation speed',
        'Completed assigned projects 3 weeks in advance, received outstanding feedback on code quality and design',
        'Leverage knowledge in REST API Design, microservices development, Unit and Integration testing',
      ],
      techStack: [
        javaIcon,
        springIcon,
        grpcIcon,
        kafkaIcon,
        postgreSQLIcon,
        dockerIcon,
        groovyIcon,
      ],
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
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon, gitIcon],
      marginTop: 100,
    },
    {
      position: 'Project Advisor',
      // To handle small screens since the text becomes too long
      company: window.screen.width > 760 ? 'National University of Singapore' : 'NUS',
      companyLink: 'https://nus.edu.sg/',
      period: 'May 2021 - Aug 2021',
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
