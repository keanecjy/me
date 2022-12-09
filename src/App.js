import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './about/About';
import './App.css';
import ScrollTopArrow from './component/scrolltoparrow/ScrollTopArrow';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import { GlobalStyles } from './global';
import Intro from './intro/Intro';
import NavigationMenu from './navigation/NavigationMenu';
import ProjectList from './projects/ProjectList';
import Skills from './skills/Skills';
import { darkTheme, lightTheme } from './theme';
import { useDarkMode } from './useDarkMode';

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
            <div className="empty-space" id="experience" />
            <Experience />
            <div className="empty-space" id="projects" />
            <ProjectList />
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
