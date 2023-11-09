import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import NotAuthorized from '../pages/NotAuthorized';
import AllFacilities from '../pages/AllFacilities';
import Search from '../pages/Search';
import NavigationGuide from '../pages/NavigationGuide';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/navguide" element={<NavigationGuide />} />
        <Route path="/search" element={<Search />} />
        <Route path="/facilities" element={<AllFacilities />} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
