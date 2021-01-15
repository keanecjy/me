import React, { useContext } from 'react';
import './styles.css';
import IconList from '../component/iconList/IconList';
import {
  adobeXdIcon,
  cssIcon,
  expressIcon,
  figmaIcon,
  firebaseIcon,
  htmlIcon,
  javaFxIcon,
  javaIcon,
  jsIcon,
  mongodbIcon,
  nodeJsIcon,
  pythonIcon,
  reactIcon,
  socketIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import { GiSkills } from 'react-icons/all';
import { StateContext } from '../App';

const Skills = () => {
  const skills = [
    reactIcon,
    jsIcon,
    firebaseIcon,
    javaIcon,
    pythonIcon,
    cssIcon,
    htmlIcon,
    adobeXdIcon,
    figmaIcon,
  ];

  const { isLight } = useContext(StateContext);

  const skills2 = [nodeJsIcon, expressIcon, socketIcon, mongodbIcon, javaFxIcon];

  return (
    <div className="skills">
      <Header
        title={'Skills'}
        icon={<GiSkills color={isLight ? '#7a3535' : '#ad8ade'} size={'2em'} />}
      />
      <p>I am decent in</p>
      <IconList icons={skills} />
      <p>I have dabbled with</p>
      <IconList icons={skills2} />
    </div>
  );
};

export default Skills;
