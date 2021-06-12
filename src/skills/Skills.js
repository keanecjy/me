import React, { useContext } from 'react';
import './styles.css';
import IconList from '../component/iconList/IconList';
import {
  adobeXdIcon,
  dockerIcon,
  expressIcon,
  firebaseIcon,
  grpcIcon,
  javaIcon,
  jsIcon,
  kafkaIcon,
  mongodbIcon,
  nodeJsIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  reduxIcon,
  springIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import { StateContext } from '../App';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';
import code from '../images/app/skills.svg';

const Skills = () => {
  const mainSkills = [
    javaIcon,
    springIcon,
    grpcIcon,
    postgreSQLIcon,
    reactIcon,
    jsIcon,
    nodeJsIcon,
    expressIcon,
  ];

  const { isLight } = useContext(StateContext);

  const otherSkills = [
    kafkaIcon,
    dockerIcon,
    mongodbIcon,
    reduxIcon,
    pythonIcon,
    firebaseIcon,
    adobeXdIcon,
  ];

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="skills" style={transitionHorizontal(isVisible, -300)}>
          <Header title={'Skills'} icon={<img src={code} height="54em" width="auto" />} />
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
