import React from 'react';
import { ThemeProvider } from 'styled-components';
import AboutSection from './about/AboutSection';
import './App.css';
import ScrollTopArrow from './component/scrolltoparrow/ScrollTopArrow';
import Contact from './contact/Contact';
import ExperienceSection from './experience/ExperienceSection';
import { GlobalStyles } from './global';
import IntroSection from './intro/IntroSection';
import NavigationMenu from './navigation/NavigationMenu';
import ProjectSection from './projects/ProjectSection';
import SkillSection from './skills/SkillSection';
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
              <IntroSection />
              <div className="empty-space" id="about" />
              <AboutSection />
            </div>
            <div className="empty-space" id="skills" />
            <SkillSection />
            <div className="empty-space" id="experience" />
            <ExperienceSection />
            <div className="empty-space" id="projects" />
            <ProjectSection />
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
