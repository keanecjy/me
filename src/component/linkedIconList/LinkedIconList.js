import React from 'react';
import LinkedIcon from '../linkedIcon/LinkedIcon';
import './styles.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/all';

const LinkedIconList = () => {
  const links = [
    {
      icon: <FaLinkedin color={'#0e76a8'} size={'2em'} />,
      link: 'https://www.linkedin.com/in/keanecjy/',
    },
    { icon: <FaGithub color={'#211F1F'} size={'2em'} />, link: 'https://github.com/keanecjy' },
    { icon: <FaEnvelope color={'#ababab'} size={'2em'} />, link: 'mailto:keanec@outlook.com' },
  ];

  return (
    <div className="social-grid">
      {links.map((item) => (
        <LinkedIcon icon={item.icon} link={item.link} key={item.link} />
      ))}
    </div>
  );
};

export default LinkedIconList;
