import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Facilities } from '../../api/facilities/Facilities';
import LoadingSpinner from '../components/LoadingSpinner';

const Search = () => {
  useEffect(() => {
    // This code will run after the component has mounted
    const body = document.body;
    body.style.background = 'none';
    body.style.backgroundColor = '#98C1D9';
  }, []);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, facilities } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Facilities.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const facilityItems = Facilities.collection.find({}).fetch();
    return {
      facilities: facilityItems,
      ready: rdy,
    };
  }, []);

  const [filters, setFilters] = useState({ name: '', location: '', island: '', services: '', insurance: '', type: '', phone: '', owner: '' });
  const [data, setData] = useState(facilities);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredData = facilities;

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        filteredData = filteredData.filter(item => item[key].toLowerCase().includes(filters[key].toLowerCase()));
      }
    });

    setData(filteredData);
  };

  useEffect(() => {
    // Apply filters when the data is ready
    if (ready) {
      applyFilters();
    }
  }, [ready, filters, facilities]);
  const resetFilters = () => {
    setFilters({ name: '', location: '', island: '', services: '', insurance: '', type: '', phone: '' });
    document.getElementById('oahu-radio').checked = false;
    document.getElementById('hawaii-radio').checked = false;
    document.getElementById('maui-radio').checked = false;
    document.getElementById('kauai-radio').checked = false;
    document.getElementById('lanai-radio').checked = false;
    document.getElementById('molokai-radio').checked = false;
    setData(facilities);
  };


  return (ready ? (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <h1>Search Page</h1>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={filters.name}
                onChange={handleFilterChange}
              />
              <Form.Control
                className="mt-2"
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
              />
              <Form.Control
                className="mt-2"
                type="text"
                name="insurance"
                placeholder="Insurance"
                value={filters.insurance}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <h1>Island</h1>
              <Form.Check
                type="radio"
                label="Oahu"
                name="island"
                id="oahu-radio"
                value="Oahu"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hawai'i"
                name="island"
                id="hawaii-radio"
                value="hawaii"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Maui"
                name="island"
                id="maui-radio"
                value="Maui"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Kauai"
                name="island"
                id="kauai-radio"
                value="Kauai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Lanai"
                name="island"
                id="lanai-radio"
                value="Lanai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Moloka'i"
                name="island"
                id="molokai-radio"
                value="molokai"
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <h1>Services</h1>
              <Form.Check
                type="radio"
                label="Oahu"
                name="island"
                id="oahu-radio"
                value="Oahu"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hawai'i"
                name="island"
                id="hawaii-radio"
                value="hawaii"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Maui"
                name="island"
                id="maui-radio"
                value="Maui"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Kauai"
                name="island"
                id="kauai-radio"
                value="Kauai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Lanai"
                name="island"
                id="lanai-radio"
                value="Lanai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Moloka'i"
                name="island"
                id="molokai-radio"
                value="molokai"
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" onClick={resetFilters}>Reset Filters</Button>
      </Form>
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Location: {item.location}<br />
                  Island: {item.island}<br />
                  Services: {item.services}<br />
                  Insurance: {item.insurance}<br />
                  Type: {item.type}<br />
                  Phone: {item.phone}<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Search;
