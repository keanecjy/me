import React from 'react';
import './styles.css';
import Header from '../component/header/header';
import { GiOpenBook } from 'react-icons/all';

const About = () => {
  return (
    <div id="about" className="about">
      <Header title={'About me'} icon={<GiOpenBook color={'#7a3535'} size={'2em'} />} />
      <p>
        I enjoy learning and exploring concepts in the vast field of Computer Science. More recently,
        I have been learning Front-end development and Artificial Intelligence.
      </p>
    </div>
  );
};

export default About;
