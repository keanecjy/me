import './App.css';
import NavigationMenu from './navigation/NavigationMenu';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Intro from './intro/Intro';

function App() {
  return (
    <div className="app">
      <NavigationMenu />
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
    </div>
  );
}

export default App;
