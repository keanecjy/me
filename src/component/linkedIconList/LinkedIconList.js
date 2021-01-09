import React, { useContext } from 'react';
import LinkedIcon from '../linkedIcon/LinkedIcon';
import './styles.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/all';
import { StateContext } from '../../App';

const LinkedIconList = () => {
  const { isLight } = useContext(StateContext);

  const colorArr = isLight ? ['#0e76a8', '#211F1F', '#ababab'] : ['#4fb1e0', '#8993d9', '#d4d4d4'];

  const links = [
    {
      icon: <FaLinkedin color={colorArr[0]} size={'2em'} />,
      link: 'https://www.linkedin.com/in/keanecjy/',
      name: 'LinkedIn',
    },
    {
      icon: <FaGithub color={colorArr[1]} size={'2em'} />,
      link: 'https://github.com/keanecjy',
      name: 'GitHub',
    },
    {
      icon: <FaEnvelope color={colorArr[2]} size={'2em'} />,
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
