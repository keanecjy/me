import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const [componentMounted, setComponentMounted] = useState(false);

  const setCurrentMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setCurrentMode('dark');
    } else {
      setCurrentMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    // Checks if user has a previously selected theme
    if (localTheme) {
      setTheme(localTheme);
    } else {
      // Check if user prefers dark mode
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localTheme
      ) {
        setTheme('dark');
      } else {
        // Set to default mode: light
        setCurrentMode('light');
      }
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
