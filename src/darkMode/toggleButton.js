import React from 'react';
import ToggleContainer from './toggleButton.styled';
import { ReactComponent as MoonIcon } from '../images/moon.svg';
import { ReactComponent as SunIcon } from '../images/sun.svg';
import './styles.css';

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
