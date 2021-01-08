import React from 'react';
import ToggleContainer from './toggleButton.styled';
import { ReactComponent as MoonIcon } from '../images/moon.svg';
import { ReactComponent as SunIcon } from '../images/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} theme={theme} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
