import React from 'react';

const LinkedIcon = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default LinkedIcon;
