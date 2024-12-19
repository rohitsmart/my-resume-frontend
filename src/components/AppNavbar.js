import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarToggler, Collapse, Button } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';
import '../styles/AppNavbar.css';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Navbar color={darkMode ? "dark" : "light"} dark={darkMode} light={!darkMode} expand="md" className="navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left side - Hamburger and Dark Mode Toggle */}
        <div className="d-flex align-items-center">
          <NavbarToggler onClick={toggle} />
          <Button color="link" className="text-white" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
        
        <NavbarBrand href="/" className="mx-auto">My Portfolio</NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex align-items-center" navbar>
            <NavItem className="mx-2">
              <NavLink href="https://github.com" className="text-white"><FaGithub /></NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://linkedin.com" className="text-white"><FaLinkedin /></NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://facebook.com" className="text-white"><FaFacebook /></NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://twitter.com" className="text-white"><FaTwitter /></NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://instagram.com" className="text-white"><FaInstagram /></NavLink>
            </NavItem>
            <NavItem>
              <Button color="primary" href="#hire" className="ml-3">Hire Me</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
