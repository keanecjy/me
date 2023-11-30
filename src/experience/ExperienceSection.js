import Header from '../component/header/header';
import portfolio from '../images/app/briefcase.svg';
import { CarousellLogo, MetaLogo, OKXLogo, SEEDULogo, WiseLogo } from '../util/CompanyLogos';
import {
  cssIcon,
  dockerIcon,
  entIcon,
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
  kafkaIcon,
  mySQLIcon,
  postgreSQLIcon,
  reactIcon,
  redisIcon,
  relayIcon,
  springIcon,
  tsIcon,
} from '../util/TechStack';
import ExperienceItem from './ExperienceItem';
import './styles.css';

const ExperienceSection = () => {
  const experiences = [
    {
      position: 'Software Engineer',
      company: <OKXLogo />,
      period: 'Feb 2023 - Present',
      desc: [
        'Designed and developed the homepage card scoring system, by setting up data pipelines using Kafka consumers to pull card click-through rate (CTR) data from the data warehouse team on an hourly basis',
        "Implemented the re-rank strategy of homepage cards through an online algorithm which predicts user's likeliness to click on cards based on user-level card interaction data, which improved card CTR by 32%",
        'Designed and built the homepage card recommendation engine, which uses a bitmap index to efficiently querying documents based on the given user features, improving API peak queries per second (QPS) by 45%',
        'Spearheaded the development of the homepage card ranking system V2, which involves integration with AI team to obtain offline-predicted ranking user preference score and combining with the online ranking score based on CTR',
        'Collaborated with the infrastructure team to design and develop role-based access and permission control (RBAC) for the backend APIs',
      ],
      techStack: [
        javaIcon,
        springIcon,
        mySQLIcon,
        redisIcon,
        kafkaIcon,
        groovyIcon,
        reactIcon,
        tsIcon,
      ],
    },
    {
      position: 'Software Engineer Intern',
      company: <MetaLogo />,
      period: 'May 2022 - Aug 2022',
      desc: [
        'Designed and developed the backend data models and APIs required for a collaborator access tool for users to obtain access to a source document, simplifying the collaboration management flow',
        'Developed reusable frontend components for the collaborator access tool, and extended usability to the sister teams as a general permission management tool',
        'Developed a general solution for sending real‑time push notifications over various mediums (email, chat) using a single unified interface to support the collaborator access tool',
        'Designed and built a role delegation tool, which allowed event owners to assign co-owners, by implementing asynchronous tasks to schedule delegations and takeovers',
        'Implemented triggers to allow for mutation of linked database and implemented observers to run lower priority logging and notifications',
      ],
      techStack: [reactIcon, flowIcon, graphQLIcon, relayIcon, hackIcon, entIcon],
    },
    {
      position: 'Software Engineer Intern',
      company: <WiseLogo />,
      period: 'May 2021 - Aug 2021, Dec 2021 - Jan 2022',
      desc: [
        'Redesigned and developed multiple backend gRPC API endpoints across several microservices, removing dependency on middle service layer in debit card generation process and contributed to decrease in average latency of API call',
        'Designed and built new versions of custom REST API endpoints to increase scalability and decrease size of JSON response payload',
        'Identified system bottlenecks and utilized server-side in-memory caching to optimize and reduce load on services in the business layer, eliminating timeout issues on several API calls and decreasing bug occurrence by 21%',
      ],
      techStack: [javaIcon, springIcon, grpcIcon, postgreSQLIcon, groovyIcon, dockerIcon],
    },
    {
      position: 'Software Engineer Intern',
      company: <CarousellLogo />,
      period: 'Aug 2021 - Dec 2021',
      desc: [
        'Led the migration of multiple REST clients to gRPC clients to enhance performance and scalability of internal backend API endpoints',
        'Ported existing services to support On-Demand isolated feature environments to increase testability and ensure safe and independent deployments',
      ],
      techStack: [goIcon, grpcIcon, mySQLIcon],
    },
    {
      position: 'Software Engineer',
      company: <SEEDULogo />,
      period: 'Jan 2021 - May 2021',
      desc: [
        'Collaborated with a team of 6 developers to maintain and improve multiple open-source software used by 800 students / day',
        'Conducted and coordinated code and design documentation reviews for features developed and bugs fixed',
      ],
      techStack: [javaIcon, javaFxIcon, gradleIcon, cssIcon, gitIcon],
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
      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceItem props={exp} key={exp.company} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
