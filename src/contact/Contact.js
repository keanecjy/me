import React from 'react';
import './styles.css';
import EmailForm from './EmailForm';
import End from './End';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact me</h1>
      <p className="contact-desc">
        Interested in what you see? Fill in this form and I will get back to you asap! ✌{' '}
      </p>
      <EmailForm />
      <End />
    </div>
  );
};

export default Contact;
