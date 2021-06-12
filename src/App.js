import React from 'react';
import './App.css';
import NavigationMenu from './navigation/NavigationMenu';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Intro from './intro/Intro';
import ScrollTopArrow from './component/scrolltoparrow/ScrollTopArrow';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';
import Experience from './experience/Experience';

export const StateContext = React.createContext({});

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const isLight = theme === 'light';
  const themeMode = isLight ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  const contextProviderValue = {
    isLight,
  };

  return (
    <ThemeProvider theme={themeMode}>
      <StateContext.Provider value={contextProviderValue}>
        <GlobalStyles />
        <div className="app">
          <NavigationMenu theme={theme} toggleTheme={() => toggleTheme()} />
          <div className="main-app">
            <div className="intro-and-about">
              <Intro />
              <div className="empty-space" id="about" />
              <About />
            </div>
            <div className="empty-space" id="skills" />
            <Skills />
            <div className="empty-space" id="skills" />
            <Experience />
            <div className="empty-space" id="projects" />
            <Projects />
            <div className="empty-space" id="contact" />
            <Contact />
          </div>
          <ScrollTopArrow />
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
