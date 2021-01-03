import React from 'react';
import LinkedIcon from '../linkedIcon/LinkedIcon';
import './styles.css';

const LinkedIconList = ({ links }) => {
  return (
    <div className="social-grid">
      {links.map((item) => (
        <LinkedIcon icon={item.icon} link={item.link} />
      ))}
    </div>
  );
};

export default LinkedIconList;
