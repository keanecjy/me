import React, { useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/all';
import './styles.css';

const ScrollTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const toDisplayArrow = () => {
    if (!showArrow && window.pageYOffset > 200) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 200) {
      setShowArrow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toDisplayArrow);

  return (
    <IoIosArrowDropupCircle
      size={'60px'}
      className="arrow-up"
      onClick={() => scrollTop()}
      style={{ display: showArrow ? 'flex' : 'none' }}
    />
  );
};

export default ScrollTopArrow;
