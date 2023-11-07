import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        <h2 className="text-white">Hawaii Healthcare Dashboard</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-start">
          <Nav.Link id="add-stuff-nav" as={NavLink} to="/add">Add Stuff</Nav.Link>
          <Nav.Link id="list-stuff-nav" as={NavLink} to="/list">List Stuff</Nav.Link>
          <Nav.Link id="all-facilities-page" as={NavLink} to="/facilities">All Facilities</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <NavDropdown id="login-dropdown" title="Language">
            <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
              Japanese
            </NavDropdown.Item>
            <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
              Spanish
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
