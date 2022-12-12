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
        I am a final year Computer Science undergraduate at the National University of Singapore. I
        enjoy learning and exploring new things in the field of Computer Science and Software
        Engineering. My focus areas are in Software Engineering and Database Systems.
      </p>
    </div>
  );
};

export default AboutSection;