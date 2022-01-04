import {
  cssIcon,
  dockerIcon,
  gitIcon,
  goIcon,
  gradleIcon,
  groovyIcon,
  grpcIcon,
  javaFxIcon,
  javaIcon,
  mySQLIcon,
  postgreSQLIcon,
  springIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import React from 'react';
import SingleExperience from './SingleExperience';
import './styles.css';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';
import portfolio from '../images/app/briefcase.svg';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Engineer Intern',
      company: 'Carousell',
      companyLink: 'https://careers.carousell.com/',
      period: 'Aug 2021 - Present',
      desc: [
        'Ported existing services onto isolated feature environments to increase testability and ensure safe and independent deployments',
        'Migrated REST clients to gRPC clients to enhance performance and scalability of internal backend API endpoints',
        'Developed and optimized APIs and services using Golang and gRPC across a distributed microservice architecture',
      ],
      techStack: [goIcon, grpcIcon, mySQLIcon, dockerIcon],
      marginTop: 40,
    },
    {
      position: 'Software Engineer Intern',
      company: 'TransferWise',
      companyLink: 'https://wise.com/',
      period: 'May 2021 - Aug 2021',
      desc: [
        'Spearheaded the launch of a new smart replacement feature that allows users to replace their debit cards for free',
        'Built and optimize new versions of custom REST API endpoints to improve scalability by implementing in-memory cache and reducing size of JSON payload',
        'Redesigned and developed gRPC APIs across multiple Java Spring Boot microservices to improve inter-service communication',
        'Implemented unit and integration tests using Mocks, Stubs and F.I.R.S.T. testing principles',
        'Utilized behavior and test-driven development (BDD, TDD) in an event-driven architecture within a PCI DSS secure environment',
      ],
      techStack: [javaIcon, springIcon, grpcIcon, postgreSQLIcon, groovyIcon, dockerIcon],
      marginTop: 90,
    },
    {
      position: 'Software Engineer',
      company: 'SE-EDU',
      companyLink: 'https://se-education.org/',
      period: 'Jan 2021 - May 2021',
      desc: [
        'Collaborated with a team of 6 developers to maintain and improve multiple open-source software used by 800 students / day',
        'Conducted and coordinated code and design documentation reviews for features developed and bugs fixed',
        'Leveraged knowledge in Software Design Patterns and Principles, Unit and Integration testing and Jackson JSON',
      ],
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon, gitIcon],
      marginTop: 100,
    },
  ];

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="experience" style={transitionHorizontal(isVisible, -300)}>
          <Header
            title={'Experience'}
            icon={<img src={portfolio} alt="" height="56em" width="auto" />}
            xVal={6}
            yVal={8}
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