import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div>
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>
          Naman Modani
        </Link>
        <Link to="/work" className={currentPath === '/work' ? 'active' : ''}>
          Work
        </Link>
        <Link to="/blog" className={currentPath === '/blog' ? 'active' : ''}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;