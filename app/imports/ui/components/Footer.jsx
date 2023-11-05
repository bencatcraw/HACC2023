import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 footerBG">
    <Container>
      <Col className="text-center">
        WOD PASSERS
      </Col>
    </Container>
  </footer>
);

export default Footer;
