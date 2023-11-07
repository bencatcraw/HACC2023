import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="my-auto text-center">
    <Button size="lg" className="landing-button" color="#98C1D9"><Link to="/search" style={{ textDecoration: 'none' }}>Get Started</Link></Button>
  </Container>
);

export default Landing;
