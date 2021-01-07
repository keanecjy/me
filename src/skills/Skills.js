import React from 'react';
import './styles.css';
import IconList from '../component/iconList/IconList';
import {
  reactIcon,
  jsIcon,
  firebaseIcon,
  javaIcon,
  pythonIcon,
  cssIcon,
  htmlIcon,
  adobeXdIcon,
  javaFxIcon,
  nodeJsIcon,
  cIcon,
} from '../util/TechStack';
import Header from '../component/header/header';
import { GiSkills } from 'react-icons/all';

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
  ];

  const skills2 = [javaFxIcon, nodeJsIcon, cIcon];

  return (
    <div className="skills">
      <Header title={'Skills'} icon={<GiSkills color={'#7a3535'} size={'2em'} />} />
      <p>I am decent in</p>
      <IconList icons={skills} />
      <p>I have dabbled with</p>
      <IconList icons={skills2} />
    </div>
  );
};

export default Skills;
