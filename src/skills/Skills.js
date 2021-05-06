import React, { useContext } from 'react';
import './styles.css';
import IconList from '../component/iconList/IconList';
import {
  adobeXdIcon,
  expressIcon,
  firebaseIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  mongodbIcon,
  nodeJsIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  reduxIcon,
  socketIcon,
  springIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import { GiSkills } from 'react-icons/all';
import { StateContext } from '../App';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';

const Skills = () => {
  const skills = [
    javaIcon,
    springIcon,
    reactIcon,
    reduxIcon,
    jsIcon,
    nodeJsIcon,
    postgreSQLIcon,
    expressIcon,
  ];

  const { isLight } = useContext(StateContext);

  const skills2 = [javaFxIcon, mongodbIcon, socketIcon, pythonIcon, firebaseIcon, adobeXdIcon];

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="skills" style={transitionHorizontal(isVisible, -300)}>
          <Header
            title={'Skills'}
            icon={<GiSkills color={isLight ? '#7a3535' : '#ad8ade'} size={'2em'} />}
          />
          <p>I am decent in</p>
          <IconList icons={skills} />
          <p>I have dabbled with</p>
          <IconList icons={skills2} />
        </div>
      )}
    </IsVisible>
  );
};

export default Skills;
