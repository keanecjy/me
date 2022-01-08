import React from 'react';
import Header from '../component/header/header';
import IconList from '../component/iconList/IconList';
import code from '../images/app/skills.svg';
import {
  dockerIcon,
  expressIcon,
  goIcon,
  groovyIcon,
  grpcIcon,
  javaIcon,
  jsIcon,
  kafkaIcon,
  mongodbIcon,
  nestIcon,
  nodeJsIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  springIcon,
  tsIcon,
} from '../util/TechStack';
import './styles.css';

const Skills = () => {
  const mainSkills = [
    javaIcon,
    springIcon,
    goIcon,
    grpcIcon,
    postgreSQLIcon,
    groovyIcon,
    jsIcon,
    nodeJsIcon,
  ];

  const otherSkills = [
    tsIcon,
    reactIcon,
    pythonIcon,
    kafkaIcon,
    dockerIcon,
    expressIcon,
    nestIcon,
    mongodbIcon,
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
