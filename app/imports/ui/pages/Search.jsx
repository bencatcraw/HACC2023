import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Facilities } from '../../api/facilities/Facilities';
import LoadingSpinner from '../components/LoadingSpinner';

const Search = () => {
  const body = document.body;
  body.style.background = 'none';
  body.style.backgroundColor = '#98C1D9';
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

  useEffect(() => {
    // Hide the specific element by setting its display to 'none'
    const googleTranslatePopup = document.querySelector('.VIpgJd-ZVi9od-aZ2wEe-wOHMyf');
    if (googleTranslatePopup) {
      googleTranslatePopup.style.display = 'none';
    }
    console.log('useEffect was used');
  }, []);

  const [filters, setFilters] = useState({ name: '', address: '', island: '', services: '', insurance: '', type: '', phone: '', owner: '' });
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
    document.getElementById('clinic-radio').checked = false;
    document.getElementById('hospital-radio').checked = false;
    document.getElementById('rehab-radio').checked = false;
    document.getElementById('nursing-radio').checked = false;
    document.getElementById('hospice-radio').checked = false;
    document.getElementById('dialysis-radio').checked = false;
    setData(facilities);
  };

  return (ready ? (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <h1 className="text-center">Search Page</h1>
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
                name="services"
                placeholder="Services"
                value={filters.services}
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
              <h1 className="text-center">Island</h1>
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
              <h1 className="text-center">Facility Type</h1>
              <Form.Check
                type="radio"
                label="Clinic"
                name="type"
                id="clinic-radio"
                value="Clinic"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hospital"
                name="type"
                id="hospital-radio"
                value="Hospital"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Rehab Centre"
                name="type"
                id="rehab-radio"
                value="Rehab Centre"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Nursing Home"
                name="type"
                id="nursing-radio"
                value="Nursing"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hospice"
                name="type"
                id="hospice-radio"
                value="Hospice"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Dialysis"
                name="type"
                id="dialysis-radio"
                value="Dialysis"
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" className="mt-3" onClick={resetFilters}>Reset Filters</Button>
      </Form>
      <Row className="mt-4">
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={6} className="mb-4">
            <Card className="h-100 shadow grow-on-hover">
              <Card.Link href={item.website} target="_blank" rel="noopener noreferrer">
                <Card.Body style={{ color: 'black' }}>
                  <span translate="no">
                    <Card.Title className="h5">{item.name}</Card.Title>
                  </span>
                  <Card.Text>
                    Address: <span translate="no">{item.address}</span><br />
                    Island: <span translate="no">{item.island}</span><br />
                    Services: <span translate="no">{item.services}</span><br />
                    Insurance: <span translate="no">{item.insurance}</span><br />
                    Type: {item.type}<br />
                    Phone: <span translate="no">{item.phone}</span><br />
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Search;
