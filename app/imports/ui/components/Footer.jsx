import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col />
        <Col className="text-center text-white">
          <p className="fs-5 text-decoration-underline">About Us!</p>
          Tyler Hawaii
          <br />
          Honolulu, HI
          {' '}
          <br />
          <a href="https://tylerhawaii.com/" className="text-white">
            tylerhawaii.com
          </a>
        </Col>
        <Col className="text-center text-white">
          <p className="fs-5 text-decoration-underline">Contact Us!</p>
          (808) 695-4620
          <br />
          201 Merchant Street Suite 1805 Honolulu, HI 96813
          {' '}
        </Col>
        <Col />
      </Row>
    </Container>
  </footer>
);

export default Footer;
