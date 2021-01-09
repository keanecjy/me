import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';
import Toggle from '../darkMode/toggleButton';
import { AiOutlineMenu } from 'react-icons/all';

const NavigationMenu = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const isLight = theme === 'light';

  const collapseNavBar = () => setExpanded(false);

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
      <AiOutlineMenu
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
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;
