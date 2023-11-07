import React from 'react';
import { Container, Button } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="my-auto text-center">
    <Button size="lg" className="text-center shadow rounded-4" color="#98C1D9">Get Started</Button>
  </Container>
);

export default Landing;
