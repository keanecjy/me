import React from 'react';
import Header from '../component/header/header';
import personal from '../images/app/personal.svg';
import './styles.css';

const AboutSection = () => {
  return (
    <div className="about">
      <Header
        title={'About me'}
        icon={<img src={personal} alt="" height="54em" width="auto" />}
        yVal={12}
      />
      <p>
        I am a Software Engineer at OKX. Previously studied Computer Science at National University
        of Singapore. My experience mostly lies in web development and database systems, and have
        dabbled with frontend web development as well!
      </p>
    </div>
  );
};

export default AboutSection;
