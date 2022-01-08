import React from 'react';
import Header from '../component/header/header';
import personal from '../images/app/personal.svg';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      <Header
        title={'About me'}
        icon={<img src={personal} alt="" height="54em" width="auto" />}
        yVal={12}
      />
      <p>
        I am a penultimate Computer Science undergraduate at the National University of Singapore. I
        enjoy learning and exploring new things in the field of Computer Science and Software
        Engineering. More recently, I have been learning fullstack development and databases.
      </p>
    </div>
  );
};

export default About;
