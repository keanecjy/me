import React from 'react';
import Header from '../component/header/header';
import IconList from '../component/iconList/IconList';
import code from '../images/app/skills.svg';
import {
  dockerIcon,
  expressIcon,
  firebaseIcon,
  goIcon,
  groovyIcon,
  grpcIcon,
  javaIcon,
  jsIcon,
  kafkaIcon,
  mongodbIcon,
  nodeJsIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
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
    reduxIcon,
    kafkaIcon,
    pythonIcon,
    dockerIcon,
    expressIcon,
    redisIcon,
    firebaseIcon,
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
