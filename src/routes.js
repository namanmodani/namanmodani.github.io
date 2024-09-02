import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Bookmarks from './components/Bookmarks';

const AppRoutes = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;