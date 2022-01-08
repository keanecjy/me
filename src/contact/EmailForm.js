import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import './styles.css';

const EmailForm = () => {
  // Message should have name, email, message fields.
  const sendMessage = (message) => {
    emailjs
      .send('service_6n1ailc', 'template_42ptdtm', message, 'user_iOqMGCDCCLYk0ynGnzqoX')
      .then((r) => {});
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values, actions) => {
        sendMessage(values);
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit} className="form-container">
          <Form.Group controlId="validationCustom01">
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              onChange={props.handleChange}
              value={props.values.name}
              className="input-box"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={props.handleChange}
              value={props.values.email}
              className="input-box"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <textarea
              required
              name="message"
              placeholder="Message"
              onChange={props.handleChange}
              value={props.values.message}
              className="message-box"
            />
          </Form.Group>
          <button type="submit" className="submit-button">
            Send message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
