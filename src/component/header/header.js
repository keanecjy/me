import React from 'react';
import './styles.css';

const Header = ({ title, icon, xVal, yVal }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div style={{ transform: `translate(${xVal}px, -${yVal}px)` }}> {icon}</div>
    </div>
  );
};

export default Header;
