import React from 'react';
import './styles.css';
import LinkedIconList from '../component/linkedIconList/LinkedIconList';

const Intro = () => {
  const INTRO =
    "Hi there! I'm Keane, and I enjoy building software that is both elegant and intuitive.";
  const NUS_LINK = 'http://nus.edu.sg/';
  const YEAR_OF_STUDY = 'I am currently a year 2 Computer Science undergraduate at ';
  const SCHOOL = 'National University of Singapore';

  return (
    <div className="top">
      <p className="wave-icon">👋</p>
      <p className="intro">{INTRO}</p>
      <p className="school">
        {YEAR_OF_STUDY}
        <a href={NUS_LINK} className="underline" target="_blank" rel="noopener noreferrer">
          {SCHOOL}
        </a>
      </p>
      <LinkedIconList />
    </div>
  );
};

export default Intro;
