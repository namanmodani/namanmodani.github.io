import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Reads from './components/Reads';
import Television from './components/Television';

const isProd = process.env.NODE_ENV === 'production';
if (isProd) ReactGA.initialize('G-1STS1V6GRM');

const PageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (isProd) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname, title: document.title });
    }
  }, [location]);
  return null;
};

const AppRoutes = () => {
  return (
    <Router>
      <PageTracker />
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
