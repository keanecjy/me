import React, { useContext } from 'react';
import './styles.css';
import Header from '../component/header/header';
import { GiOpenBook } from 'react-icons/all';
import { StateContext } from '../App';

const About = () => {
  const { isLight } = useContext(StateContext);

  return (
    <div className="about">
      <Header
        title={'About me'}
        icon={<GiOpenBook color={isLight ? '#7a3535' : '#ad8ade'} size={'2em'} />}
      />
      <p>
        I enjoy learning and exploring concepts in the vast field of Computer Science. More
        recently, I have been learning Front-end development and Artificial Intelligence.
      </p>
    </div>
  );
};

export default About;
