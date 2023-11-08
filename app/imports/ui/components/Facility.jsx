import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Contact table. See pages/ListContacts.jsx. */
const Facility = ({ facility }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>{facility.name}</Card.Title>
      <Card.Subtitle>{facility.phone}</Card.Subtitle>
      <Card.Subtitle>{facility.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{facility.island}</Card.Text>
      <Card.Text>{facility.services}</Card.Text>
      <Card.Text>{facility.type}</Card.Text>
      <Card.Text>{facility.insurance}</Card.Text>
      <Card.Text>{facility.website}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Facility.propTypes = {
  facility: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    island: PropTypes.string,
    services: PropTypes.string,
    type: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string,
    insurance: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Facility;
