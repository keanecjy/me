import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';
import Toggle from '../darkMode/toggleButton';

const NavigationMenu = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const isLight = theme === 'light';

  const collapseNavBar = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 150);
  };

  return (
    <Navbar
      expanded={expanded}
      sticky="top"
      bg={isLight ? 'light' : 'dark'}
      expand="lg"
      className="nav-bar-menu"
    >
      <Navbar.Brand onClick={() => collapseNavBar()} href="#">
        Keane
      </Navbar.Brand>
      <Navbar.Toggle
        className="hamburger"
        onClick={() => setExpanded(!expanded)}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-bar">
          <Nav.Link onSelect={() => collapseNavBar()} href="#about">
            About
          </Nav.Link>
          <Nav.Link onSelect={() => collapseNavBar()} href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link onSelect={() => collapseNavBar()} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link onSelect={() => collapseNavBar()} href="#contact">
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Navbar>
  );
};

export default NavigationMenu;
