import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center text-white">
        Tyler Hawaii
        <br />
        Honolulu, HI
        {' '}
        <br />
        <a href="https://tylerhawaii.com/" className="text-white">
          tylerhawaii.com
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
