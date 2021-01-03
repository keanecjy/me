import React from 'react';
import './styles.css';

const Header = ({ title, icon }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {icon}
    </div>
  );
};

export default Header;
