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
        I am a Software Engineer at OKX, and am currently part of the User Journey team. As a
        Backend Engineer, I was involved in designing and scaling our homepage card architecture,
        which involved the card retrieval, scoring and re-ranking process. While my experience
        mostly comes in backend development, I have also dabbled in frontend development as well,
        having had worked on React back at Meta.
      </p>
    </div>
  );
};

export default AboutSection;
