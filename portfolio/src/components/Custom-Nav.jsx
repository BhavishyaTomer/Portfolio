import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import Scrollspy from 'react-scrollspy';
import resume from "../assets/resume.pdf"

const CustomNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Scrollspy
              items={['home', 'skills', 'projects']}
              currentClassName="active"
              className="navbar-nav me-auto"
            >
              <Nav.Link as={HashLink} smooth to="#home" className="navbar-link">Home</Nav.Link>
              <Nav.Link as={HashLink} smooth to="#skills" className="navbar-link">Skills</Nav.Link>
              <Nav.Link as={HashLink} smooth to="#projects" className="navbar-link">Projects</Nav.Link>
            </Scrollspy>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/bhavishya-tomer-9696381b0/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/bhavishya_tomer?igsh=MXc2OWV4c3dlemNncg=="><img src={navIcon3} alt="" /></a>
              </div>
              <a href={resume} download>
                <button className="btn btn-primary"><span>Let’s Connect</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default CustomNav;
