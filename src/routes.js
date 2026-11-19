import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Reads from './components/Reads';
import Television from './components/Television';

const AppRoutes = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reads" element={<Reads />} />
          <Route path="/essays" element={<Navigate to="/reads" replace />} />
          <Route path="/bookmarks" element={<Navigate to="/reads" replace />} />
          <Route path="/tv" element={<Television />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
