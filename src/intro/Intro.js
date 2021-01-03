import React from 'react';
import './styles.css';
import LinkedIconList from '../component/linkedIconList/LinkedIconList';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/all';

const Intro = () => {

  const INTRO = "Hi there! I'm Keane, and I enjoy building software that is both elegant and easy to use.";
  const NUS_LINK = 'http://nus.edu.sg/';
  const YEAR_OF_STUDY = 'I am currently a year 2 Computer Science undergraduate at ';
  const SCHOOL = 'National University of Singapore';

  const links = [
    { icon: <FaLinkedin color={'#0e76a8'} size={'2em'} />, link: 'https://www.linkedin.com/in/keanecjy/' },
    { icon: <FaGithub color={'#211F1F'} size={'2em'} />, link: 'https://github.com/keanecjy' },
    { icon: <FaEnvelope color={'#ababab'} size={'2em'} />, link: 'mailto:keanec@hotmail.com' },
  ];

  return (
    <div id="#top" className="top">
      <p className="wave-icon">👋</p>
      <p className="intro">{INTRO}</p>
      <p className="school">
        {YEAR_OF_STUDY}
        <a href={NUS_LINK} className="underline" target="_blank" rel="noopener noreferrer">
          {SCHOOL}
        </a>
      </p>
      <LinkedIconList links={links} />
    </div>
  );
};

export default Intro;
