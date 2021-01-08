import React, { useState } from 'react';
import './App.css';
import NavigationMenu from './navigation/NavigationMenu';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Intro from './intro/Intro';
import ScrollTopArrow from './component/scrolltoparrow/ScrollTopArrow';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
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
          <div className="empty-space" id="projects" />
          <Projects />
          <div className="empty-space" id="contact" />
          <Contact />
        </div>
        <ScrollTopArrow />
      </div>
    </ThemeProvider>
  );
}

export default App;
