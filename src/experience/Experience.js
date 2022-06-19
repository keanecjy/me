import React from 'react';
import Header from '../component/header/header';
import portfolio from '../images/app/briefcase.svg';
import { CarousellLogo, MetaLogo, WiseLogo } from '../util/CompanyLogos';
import {
  cssIcon,
  dockerIcon,
  flowIcon,
  gitIcon,
  goIcon,
  gradleIcon,
  graphQLIcon,
  groovyIcon,
  grpcIcon,
  hackIcon,
  javaFxIcon,
  javaIcon,
  mySQLIcon,
  phpIcon,
  postgreSQLIcon,
  reactIcon,
  relayIcon,
  springIcon,
} from '../util/TechStack';
import SingleExperience from './SingleExperience';
import './styles.css';

const Experience = () => {
  const experiences = [
    {
      position: 'Enterprise Software Engineer Intern',
      company: <MetaLogo />,
      companyLink: 'https://www.metacareers.com/',
      period: 'May 2022 - Aug 2022',
      desc: [
        'Spearheaded the introduction of a collaboration tool used by multiple teams worldwide',
        'Developed reusable user interfaces and data models to support the collaboration tool',
        'Led cross-functional efforts with XFN teams to identify and iterate on features and requirements',
      ],
      techStack: [reactIcon, flowIcon, graphQLIcon, relayIcon, hackIcon, phpIcon],
      marginTop: 40,
    },
    {
      position: 'Software Engineer Intern',
      company: <CarousellLogo />,
      companyLink: 'https://careers.carousell.com/',
      period: 'Aug 2021 - Dec 2021',
      desc: [
        'Ported existing services onto isolated on-demand feature environments to increase testability and ensure safe and independent deployments',
        'Migrated REST clients to gRPC clients to enhance performance and scalability of internal backend API endpoints',
        'Developed and optimized APIs and services using Golang and gRPC across a distributed microservice architecture',
      ],
      techStack: [goIcon, grpcIcon, mySQLIcon, dockerIcon],
      marginTop: 90,
    },
    {
      position: 'Software Engineer Intern',
      company: <WiseLogo />,
      companyLink: 'https://wise.com/',
      period: 'May 2021 - Aug 2021',
      desc: [
        'Spearheaded the launch of a new smart replacement feature that allows users to replace their debit cards for free',
        'Built and optimize new versions of custom REST API endpoints to improve scalability by implementing in-memory cache and reducing size of JSON payload',
        'Redesigned and developed gRPC APIs across several microservices to remove dependency on middle service layer and decrease latency of API calls',
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
      ],
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon, gitIcon],
      marginTop: 90,
    },
  ];

  return (
    <div className="experience">
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
  );
};

export default Experience;
