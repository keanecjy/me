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
    <div id="#skills" className="skills">
      <h1>Skills</h1>
      <div>
        <p>I am decent in</p>
        <IconList icons={skills} />
      </div>
      <div>
        <p>I have dabbled with</p>
        <IconList icons={skills2} />
      </div>
    </div>
  );
};

export default Skills;
