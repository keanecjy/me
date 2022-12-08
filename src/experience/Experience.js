import Header from '../component/header/header';
import portfolio from '../images/app/briefcase.svg';
import { CarousellLogo, MetaLogo, SEEDULogo, WiseLogo } from '../util/CompanyLogos';
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
  mySQLIcon,
  postgreSQLIcon,
  reactIcon,
  relayIcon,
  springIcon
} from '../util/TechStack';
import SingleExperience from './SingleExperience';
import './styles.css';

const Experience = () => {
  const experiences = [
    {
      position: 'Enterprise Software Engineer Intern',
      company: <MetaLogo />,
      period: 'May 2022 - Aug 2022',
      desc: [
        'Designed and developed backend data models and APIs for a collaborator access tool using Hack, Ent and GraphQL',
        'Developed reusable frontend interfaces with React and Relay, while allowing extensibility and reuse by the larger Shop team',
        'Developed email and chat notifications to provide real-time push notifications for collaboration access requests and outcome',
        'Spearheaded and developed a permission delegation tool to support access role and permission delegations as part of my stretch goals',
        'Utilized React Hooks and implemented lazy loading of modals to optimize frontend load times and improved on existing user flow',
      ],
      techStack: [reactIcon, flowIcon, graphQLIcon, relayIcon, hackIcon, entIcon],
      marginTop: 40,
    },
    {
      position: 'Software Engineer Intern',
      company: <WiseLogo />,
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
      position: 'Software Engineer Intern',
      company: <CarousellLogo />,
      period: 'Aug 2021 - Dec 2021',
      desc: [
        'Led the migration of multiple REST clients to gRPC clients to enhance performance and scalability of internal backend API endpoints',
        'Ported existing services onto isolated On Demand environments to increase testability and ensure safe and independent deployments',
        'Leveraged knowledge in Factory and Command software design patterns to improve code design in multiple Golang services',
      ],
      techStack: [goIcon, grpcIcon, mySQLIcon],
      marginTop: 90,
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
