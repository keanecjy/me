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
import { GiSkills } from 'react-icons/all';
import { StateContext } from '../App';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';

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
          <Header
            title={'Skills'}
            icon={<GiSkills color={isLight ? '#7a3535' : '#ad8ade'} size={'2em'} />}
          />
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
