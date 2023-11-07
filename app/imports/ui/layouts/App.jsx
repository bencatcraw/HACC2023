import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import AllFacilities from '../pages/AllFacilities';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/facilities" element={<AllFacilities />} />
        <Route path="/list" element={<ListStuff />} />
        <Route path="/add" element={<AddStuff />} />
        <Route path="/edit/:_id" element={<EditStuff />} />
        <Route path="/admin" element={<ListStuffAdmin />} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
