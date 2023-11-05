import React from 'react';
import { Container, Navbar, NavLink, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <Navbar className="navbarBG" expand="lg">
    <Container id="navbar-left">
      <Image src="https://raw.githubusercontent.com/kyesteele/publicImages/main/tyler-logo.png" style={{ width: '75px' }} />
    </Container>
    <Container id="navbar-center">
      <Navbar.Brand as={NavLink} to="/">
        <h2>Tyler Hawaii Health Dashboard</h2>
      </Navbar.Brand>
    </Container>
    <Container id="navbar-right">
      <NavDropdown className="languageFont" title="Language" id="language-dropdown">
        <Link className="navLinkFont" to="/">
          English
        </Link>
        <br />
        <Link className="navLinkFont" to="/es">
          Spanish
        </Link>
        <br />
        <Link className="navLinkFont" to="/ja">
          Japanese
        </Link>
      </NavDropdown>
    </Container>
  </Navbar>
);

export default NavBar;
