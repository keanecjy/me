import React from 'react';
import './styles.css';
import { OverlayTrigger } from 'react-bootstrap';

const Icon = ({ icon, name }) => {
  return (
    <OverlayTrigger key={'bottom'} placement={'bottom'} overlay={<p className="hover-text">{name}</p>}>
      <img alt={name} src={icon} className="icon"/>
    </OverlayTrigger>
  );
};

export default Icon;
