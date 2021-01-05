import React from 'react';
import './styles.css';
import EmailForm from './EmailForm';
import End from './End';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact me</h1>
      <EmailForm />
      <End />
    </div>
  );
};

export default Contact;
