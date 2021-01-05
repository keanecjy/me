import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';

const NavigationMenu = () => (
  <Navbar sticky="top" bg="light" expand="lg" className="nav-bar-menu">
    <Navbar.Brand href="#">Keane</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav-bar">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationMenu;
