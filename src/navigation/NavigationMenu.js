import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';

const NavigationMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const collapseNavBar = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 150);
  };

  return (
    <Navbar expanded={expanded} sticky="top" bg="light" expand="lg" className="nav-bar-menu">
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
    </Navbar>
  );
};

export default NavigationMenu;
