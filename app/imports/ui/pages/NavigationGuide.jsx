import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const NavigationGuide = () => {
  useEffect(() => {
    // Hide the specific element by setting its display to 'none'
    const googleTranslatePopup = document.querySelector('.VIpgJd-ZVi9od-aZ2wEe-wOHMyf');
    if (googleTranslatePopup) {
      googleTranslatePopup.style.display = 'none';
    }
    console.log('useEffect was used');
  }, []);
  const body = document.body;
  body.style.background = 'none';
  body.style.backgroundColor = '#98C1D9';
  const searchImageSrc = 'https://raw.githubusercontent.com/aidenlkw/publicimages/5a5ec59e703348c768035e120c0a00f3fb4ccbd2/img.png';
  const filtersImageSrc = 'https://raw.githubusercontent.com/aidenlkw/publicimages/d34d89a78b6ec591371036e4ed8202047c1ab1ef/Filters.png';
  const contactImageSrc = 'https://raw.githubusercontent.com/aidenlkw/publicimages/2185db3e6ff9c668ac11f0972cc96645f88631c8/Contactus.png';
  const facilitiesImageSrc = 'https://raw.githubusercontent.com/aidenlkw/publicimages/0ae5fd67597273f790ac5cc637318a6dd138a543/All.png';

  return (
    <Container className="mt-5 text-black">
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

      <section className="mt-4 mb-5">
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
