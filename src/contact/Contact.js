import React, { useContext } from 'react';
import './styles.css';
import EmailForm from './EmailForm';
import End from './End';
import Header from '../component/header/header';
import { IoIosRocket } from 'react-icons/all';
import { StateContext } from '../App';

const Contact = () => {
  const { isLight } = useContext(StateContext);

  return (
    <div className="contact">
      <Header
        icon={<IoIosRocket color={isLight ? '#983636' : '#d49c9c'} size={'2em'} />}
        title="Contact me"
      />
      <h3 className="contact-desc">
        Interested in what you see? Fill in this form and I will get back to you asap! ✌
      </h3>
      <EmailForm />
      <End />
    </div>
  );
};

export default Contact;
