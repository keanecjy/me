import React from 'react';
import LinkedIconList from '../component/linkedIconList/LinkedIconList';
import '../projects/styles.css';
import { MetaLogo } from '../util/CompanyLogos';
import './styles.css';

const Intro = () => {
  const INTRO =
    "Hi there! I'm Keane, and I enjoy building software that is both beautiful and impactful.";
  const COMPANY_LINK = 'http://www.nus.edu.sg/';
  const CURRENT_JOB = 'Currently interning';

  return (
    <div className="top">
      <p className="wave-icon">👋</p>
      <p className="intro">{INTRO}</p>
      <p className="job">
        {CURRENT_JOB}&nbsp;@&nbsp;&nbsp;
        <a href={COMPANY_LINK} target="_blank" rel="noopener noreferrer">
          <MetaLogo />
        </a>
      </p>
      <LinkedIconList />
    </div>
  );
};

export default Intro;
