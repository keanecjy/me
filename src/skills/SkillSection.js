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
  postgreSQLIcon,
  prismaIcon,
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  springIcon,
  tailwindIcon,
  trpcIcon,
  tsIcon,
} from '../util/TechStack';
import './styles.css';

const SkillSection = () => {
  const mainSkills = [
    javaIcon,
    jsIcon,
    tsIcon,
    expressIcon,
    reactIcon,
    graphQLIcon,
    trpcIcon,
    postgreSQLIcon,
    firebaseIcon,
    springIcon,
  ];

  const otherSkills = [
    grpcIcon,
    hackIcon,
    entIcon,
    goIcon,
    pythonIcon,
    prismaIcon,
    redisIcon,
    tailwindIcon,
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
