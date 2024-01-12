import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import logo from '../assets/img/banapay-logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
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
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-navbar" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#token" className={activeLink === 'token' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('token')}>Token</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/Banapay" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://twitter.com/banapay_app" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
              <a href="#"><img src={navIcon4} alt="" /></a>
            </div>
            <Nav.Link href='/buy-token'>
              <button className=""><span>Buy Token</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export const BuyToken = () => {
  return (
    <div className="App">
      <NavBar />
      <section className="buy-token-banner">
        <div className="swap-tile">
          <div className="swap-tile-header">
            <p>Buy</p>
          </div>
          <div className="swap-tile-body">
            <div className="token-tile">
            </div>
            <div className="token-tile">
            </div>
            <Button size="lg" className="swap-tile-button">
              <span>Buy</span>
            </Button>
          </div>  
        </div>
      </section>
    </div>
  );
};
