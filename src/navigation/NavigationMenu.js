import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationMenu = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#top">Keane</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#about">About me</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationMenu;
