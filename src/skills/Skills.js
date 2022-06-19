import Header from '../component/header/header';
import IconList from '../component/iconList/IconList';
import code from '../images/app/skills.svg';
import {
  dockerIcon,
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
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  springIcon,
  swiftIcon,
} from '../util/TechStack';
import './styles.css';

const Skills = () => {
  const mainSkills = [
    javaIcon,
    springIcon,
    grpcIcon,
    postgreSQLIcon,
    reactIcon,
    jsIcon,
    swiftIcon,
    firebaseIcon,
  ];

  const otherSkills = [
    flowIcon,
    hackIcon,
    graphQLIcon,
    reduxIcon,
    entIcon,
    goIcon,
    pythonIcon,
    dockerIcon,
    redisIcon,
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
