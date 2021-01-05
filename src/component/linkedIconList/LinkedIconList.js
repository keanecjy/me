import React from 'react';
import LinkedIcon from '../linkedIcon/LinkedIcon';
import './styles.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/all';

const LinkedIconList = () => {
  const links = [
    {
      icon: <FaLinkedin color={'#0e76a8'} size={'2em'} />,
      link: 'https://www.linkedin.com/in/keanecjy/',
      name: 'LinkedIn',
    },
    {
      icon: <FaGithub color={'#211F1F'} size={'2em'} />,
      link: 'https://github.com/keanecjy',
      name: 'GitHub',
    },
    {
      icon: <FaEnvelope color={'#ababab'} size={'2em'} />,
      link: 'mailto:keanec@outlook.com',
      name: 'email',
    },
  ];

  return (
    <div className="social-grid">
      {links.map((item) => (
        <LinkedIcon props={item} key={item.link} />
      ))}
    </div>
  );
};

export default LinkedIconList;
