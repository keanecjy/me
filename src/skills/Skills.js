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
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  springIcon,
  swiftIcon,
  tsIcon,
} from '../util/TechStack';
import './styles.css';

const Skills = () => {
  const mainSkills = [
    reactIcon,
    jsIcon,
    javaIcon,
    grpcIcon,
    hackIcon,
    postgreSQLIcon,
    swiftIcon,
    firebaseIcon,
  ];

  const otherSkills = [
    flowIcon,
    tsIcon,
    graphQLIcon,
    reduxIcon,
    entIcon,
    goIcon,
    springIcon,
    pythonIcon,
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
