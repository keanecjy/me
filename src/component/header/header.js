import React from 'react';
import './styles.css';

const Header = ({ title, icon, yVal }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div style={{ transform: `translateY(-${yVal}px)` }}> {icon}</div>
    </div>
  );
};

export default Header;
