import React from 'react';
import './styles.css';
import IconList from '../component/iconList/IconList';
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
  nodeJsIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  springIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';
import code from '../images/app/skills.svg';

const Skills = () => {
  const mainSkills = [
    javaIcon,
    springIcon,
    grpcIcon,
    postgreSQLIcon,
    jsIcon,
    nodeJsIcon,
    groovyIcon,
  ];

  const otherSkills = [
    goIcon,
    pythonIcon,
    kafkaIcon,
    dockerIcon,
    expressIcon,
    mongodbIcon,
    reactIcon,
  ];

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="skills" style={transitionHorizontal(isVisible, -300)}>
          <Header title={'Skills'} icon={<img src={code} alt="" height="54em" width="auto" />} />
          <p>I am decent in</p>
          <IconList icons={mainSkills} />
          <p>I have dabbled with</p>
          <IconList icons={otherSkills} />
        </div>
      )}
    </IsVisible>
  );
};

export default Skills;
