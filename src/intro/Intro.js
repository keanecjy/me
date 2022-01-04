import React from 'react';
import './styles.css';
import '../projects/styles.css';
import LinkedIconList from '../component/linkedIconList/LinkedIconList';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';

const Intro = () => {
  const INTRO =
    "Hi there! I'm Keane, and I enjoy building software that is both beautiful and impactful.";
  const COMPANY_LINK = 'http://www.nus.edu.sg/';
  const CURRENT_JOB = 'Currently studying Computer Science at ';
  const COMPANY = 'NUS.';

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="top" style={transitionHorizontal(isVisible, -300)}>
          <p className="wave-icon">👋</p>
          <p className="intro">{INTRO}</p>
          <p className="school">
            {CURRENT_JOB}
            <a
              href={COMPANY_LINK}
              className="app-link"
              style={{ fontWeight: 600 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY}
            </a>
          </p>
          <LinkedIconList />
        </div>
      )}
    </IsVisible>
  );
};

export default Intro;
