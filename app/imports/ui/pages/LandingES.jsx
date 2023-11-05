import React from 'react';
import { Container } from 'react-bootstrap';
import translations from '../languages/translations';

/* A simple static component to render some text for the landing page. */
const LandingEN = () => (
  <Container id="landing-page" fluid className="py-3 text-center">
    <h1 style={{ fontSize: '96px' }}>twitch.tv/loltyler1</h1>
    <h1 style={{ fontSize: '96px' }}>{translations[1].hello_world}</h1>
    <form className="search-form">
      <input type="text" className="search-input" placeholder="Enter text..." />
      <input type="submit" className="search-button" value="Search" />
    </form>
  </Container>
);

export default LandingEN;
