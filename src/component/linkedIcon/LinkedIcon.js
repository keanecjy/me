import React from 'react';

const LinkedIcon = ({ props }) => {
  const { icon, link, name } = props;

  return (
    <a href={link} title={name} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default LinkedIcon;
