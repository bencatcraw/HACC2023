import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const AllFacilities = () => {
  useEffect(() => {
    // This code will run after the component has mounted
    const body = document.body;
    body.style.backgroundImage = 'none';
  }, []);

  return (
    <Container id="all-facilities-page" fluid className="py-3">
      <div className="text-center">
        <Image roundedCircle src="/images/meteor-logo.png" height="300px" />
      </div>
      <Container color="#97C1D8">
        <ul className="justify-content-start">
          <li className="fs-4">Fresenius Medical Care - Lanai Community Dialysis Center</li>
          <li className="fs-4">Liberty Dialysis - Hawaii LLC - Ala Moana Dialysis Facility</li>
          <li className="fs-4">Liberty Dialysis - Hawaii LLC - Hilo Dialysis Facility</li>
          <li className="fs-4">Liberty Dialysis - Hawaii LLC - Kauai Dialysis Facility</li>
          <li className="fs-4">Liberty Dialysis - Hawaii LLC - Hawaii Kai Dialysis Facility</li>
          <li className="fs-4">Adventist Health Castle Home Care</li>
          <li className="fs-4">Cradles N’ Crayons, LLC (Kahului)</li>
          <li className="fs-4">Hale Makua Home Health Care Agency</li>
          <li className="fs-4">Hilo Medical Center Home Care</li>
          <li className="fs-4">Kohala Home Health Care of North Hawaii Community Hospital</li>
        </ul>
      </Container>;

    </Container>
  );
};

export default AllFacilities;
