import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleZoomClick = () => {
  document.body.classList.toggle('zoomed');
};
/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="my-auto text-center">
    <Link to="/search" style={{ textDecoration: 'none' }}><Button size="lg" className="landing-button" color="#98C1D9" onClick={handleZoomClick}>Get Started</Button></Link>

  </Container>
);

export default Landing;
