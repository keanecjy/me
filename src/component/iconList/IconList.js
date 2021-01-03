import React from 'react';
import Icon from '../icon/Icon';
import './styles.css';

const IconList = ({ icons }) => {
  return (
    <div className="icon-list">
      {icons.map((item) => (
        <Icon icon={item.icon} name={item.name} key={item.name} />
      ))}
    </div>
  );
};

export default IconList;
