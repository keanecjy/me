import Header from '../component/header/header';
import IconList from '../component/iconList/IconList';
import code from '../images/app/skills.svg';
import {
  entIcon,
  firebaseIcon,
  flowIcon,
  goIcon,
  graphQLIcon,
  grpcIcon,
  hackIcon,
  javaIcon,
  jsIcon,
  postgreSQLIcon,
  prismaIcon,
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  springIcon,
  swiftIcon,
  tsIcon
} from '../util/TechStack';
import './styles.css';

const Skills = () => {
  const mainSkills = [
    javaIcon,
    jsIcon,
    tsIcon,
    reactIcon,
    graphQLIcon,
    grpcIcon,
    postgreSQLIcon,
    firebaseIcon,
    springIcon,
  ];
  
  const otherSkills = [
    hackIcon,
    flowIcon,
    reduxIcon,
    entIcon,
    goIcon,
    pythonIcon,
    prismaIcon,
    redisIcon,
    swiftIcon,
  ];

  return (
    <div className="skills">
      <Header title={'Skills'} icon={<img src={code} alt="" height="54em" width="auto" />} />
      <p>I am decent in</p>
      <IconList icons={mainSkills} />
      <p>I have dabbled with</p>
      <IconList icons={otherSkills} />
    </div>
  );
};

export default Skills;
