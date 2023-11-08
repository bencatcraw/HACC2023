import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

const defaultFacilities = [
  { name: 'Fresenius Medical Care - Lanai Community Dialysis Center', location: '628 7th Street Lanai City, Hawaii 96763', island: 'Lanai', services: 'todo', insurance: 'todo', type: 'Dialysis center', phone: '1-808-565-9650' },
  { name: 'Liberty Dialysis - Hawaii LLC - Ala Moana Dialysis Facility', location: '500 Ala Moana Boulevard, Suite 7302 Honolulu, Hawaii 96813', island: 'Oahu', services: 'todo', insurance: 'todo', type: 'Dialysis center', phone: '(808) 245-6032' },
  // Add more facilities here
];

const Search = () => {
  const [filters, setFilters] = useState({ name: '', location: '', island: '', services: '', insurance: '', type: '', phone: '', owner: '' });
  const [data, setData] = useState(defaultFacilities);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredData = defaultFacilities;

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        filteredData = filteredData.filter(item => item[key].toLowerCase().includes(filters[key].toLowerCase()));
      }
    });

    setData(filteredData);
  };

  const resetFilters = () => {
    setFilters({ name: '', location: '', island: '', services: '', insurance: '', type: '', phone: '' });
    document.getElementById('oahu-radio').checked = false;
    document.getElementById('hawaii-radio').checked = false;
    document.getElementById('maui-radio').checked = false;
    document.getElementById('kauai-radio').checked = false;
    document.getElementById('lanai-radio').checked = false;
    document.getElementById('molokai-radio').checked = false;
    setData(defaultFacilities);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      applyFilters();
    }
  };

  return (
    <div className="search-bg">
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
                  onKeyPress={handleKeyPress}
                />
                <Form.Control
                  className="mt-2"
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  onKeyPress={handleKeyPress}
                />
                <Form.Control
                  className="mt-2"
                  type="text"
                  name="insurance"
                  placeholder="Insurance"
                  value={filters.insurance}
                  onChange={handleFilterChange}
                  onKeyPress={handleKeyPress}
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
          <Button variant="primary" onClick={applyFilters}>Apply Filters</Button>
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
    </div>
  );
};

export default Search;
