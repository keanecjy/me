import React from 'react';
import './styles.css';
import Header from '../component/header/header';
import { transitionHorizontal } from '../util/TransitionHorizontal';
import IsVisible from 'react-is-visible';
import personal from '../images/app/personal.svg';

const About = () => {
  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="about" style={transitionHorizontal(isVisible, -300)}>
          <Header
            title={'About me'}
            icon={<img src={personal} alt="" height="54em" width="auto" />}
            yVal={12}
          />
          <p>
            I am a penultimate year Computer Science undergraduate at the National University of
            Singapore. I enjoy learning and exploring new things in the field of software
            development. More recently, I have been learning backend development and databases.
          </p>
        </div>
      )}
    </IsVisible>
  );
};

export default About;
