import Header from '../component/header/header';
import IconList from '../component/iconList/IconList';
import code from '../images/app/skills.svg';
import {
  entIcon,
  expressIcon,
  firebaseIcon,
  goIcon,
  graphQLIcon,
  grpcIcon,
  hackIcon,
  javaIcon,
  jsIcon,
  kafkaIcon,
  mySQLIcon,
  prismaIcon,
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  springIcon,
  trpcIcon,
  tsIcon,
} from '../util/TechStack';
import './styles.css';

const SkillSection = () => {
  const mainSkills = [
    javaIcon,
    springIcon,
    reactIcon,
    jsIcon,
    tsIcon,
    expressIcon,
    graphQLIcon,
    trpcIcon,
    mySQLIcon,
  ];

  const otherSkills = [
    goIcon,
    pythonIcon,
    grpcIcon,
    hackIcon,
    prismaIcon,
    redisIcon,
    kafkaIcon,
    firebaseIcon,
    reduxIcon,
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

export default SkillSection;
