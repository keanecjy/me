import './App.css';
import NavigationMenu from "./navigation/NavigationMenu";
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
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
