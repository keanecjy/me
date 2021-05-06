import React from 'react';
import './styles.css';
import LinkedIconList from '../component/linkedIconList/LinkedIconList';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';

const Intro = () => {
  const INTRO =
    "Hi there! I'm Keane, and I enjoy building software that is both elegant and intuitive.";
  const NUS_LINK = 'http://nus.edu.sg/';
  const YEAR_OF_STUDY = 'I am currently a Computer Science undergraduate at ';
  const SCHOOL = 'National University of Singapore.';

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="top" style={transitionHorizontal(isVisible, -300)}>
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
      )}
    </IsVisible>
  );
};

export default Intro;
