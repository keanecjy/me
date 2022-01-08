import React from 'react';
import { ReactComponent as MoonIcon } from '../images/app/moon.svg';
import { ReactComponent as SunIcon } from '../images/app/sun.svg';
import './styles.css';
import ToggleContainer from './toggleButton.styled';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer
      className="toggle-button"
      lightTheme={isLight}
      theme={theme}
      onClick={toggleTheme}
    >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
