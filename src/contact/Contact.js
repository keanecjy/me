import React from 'react';
import './styles.css';
import EmailForm from './EmailForm';
import End from './End';
import Header from '../component/header/header';
import rocket from '../images/app/rocket.svg';

const Contact = () => {
  return (
    <div className="contact">
      <Header
        title="Contact me"
        icon={<img src={rocket} alt="" height="54em" width="auto" />}
        yVal={8}
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
