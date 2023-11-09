import React from 'react';
import { Container } from 'react-bootstrap';

const NavigationGuide = () => {
  const searchImageSrc = '/search_image.png'; // Replace with the actual path to your search image
  const filtersImageSrc = '/filters_image.png'; // Replace with the actual path to your filters image
  const contactImageSrc = '/contact_image.png'; // Replace with the actual path to your contact image
  const facilitiesImageSrc = '/facilities_image.png'; // Replace with the actual path to your facilities image

  return (
    <Container className="mt-5 text-white">
      <h1 className="text-center mb-4">Welcome to Our Site Navigation Guide</h1>
      <p className="text-center">
        We have made it easy for you to navigate through our site. Below are key actions and sections to help you get started.
      </p>

      <section className="mt-4">
        <h2>Click Here to Search</h2>
        <p>
          To discover specific content quickly, click the Search button on the top of the page. This will lead you to the search page, where you can
          enter keywords or phrases to find relevant information.
        </p>
        <div className="text-center">
          <img src={searchImageSrc} alt="Search" className="img-fluid" />
        </div>
      </section>

      <section className="mt-4">
        <h2>Choose Your Filters</h2>
        <p>
          Once on the search page, explore various filters to refine your search. Tailor the results to your preferences and
          easily find the content that matters most to you.
        </p>
        <div className="text-center">
          <img src={filtersImageSrc} alt="Filters" className="img-fluid" />
        </div>
      </section>

      <section className="mt-4">
        <h2>Contact Us</h2>
        <p>
          Need assistance or have questions? Navigate to the contact section to reach out to our support team.
        </p>
        <div className="text-center">
          <img src={contactImageSrc} alt="Contact Us" className="img-fluid" />
        </div>
      </section>

      <section className="mt-4">
        <h2>Explore All Facilities</h2>
        <p>
          Discover all our facilities by exploring the dedicated section. Click on the button next to the Search button to see all available facilities.
        </p>
        <div className="text-center">
          <img src={facilitiesImageSrc} alt="Explore Facilities" className="img-fluid" />
        </div>
      </section>
    </Container>
  );
};

export default NavigationGuide;
