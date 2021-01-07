import React from 'react';
import './styles.css';
import EmailForm from './EmailForm';
import End from './End';
import Header from '../component/header/header';
import { IoIosRocket } from 'react-icons/all';

const Contact = () => {
  return (
    <div className="contact">
      <Header icon={<IoIosRocket color={'#983636'} size={'2em'} />} title="Contact me" />
      <p className="contact-desc">
        Interested in what you see? Fill in this form and I will get back to you asap! ✌
      </p>
      <EmailForm />
      <End />
    </div>
  );
};

export default Contact;
