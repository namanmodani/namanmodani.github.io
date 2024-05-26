// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eclipse } from '@theme-toggles/react';
import '@theme-toggles/react/css/Eclipse.css';
import { toggleTheme, loadInitialTheme } from '../theme';
import '../styles/styles.css'; // Import the custom CSS for the Navbar

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    loadInitialTheme();
    const initialTheme = document.body.getAttribute('data-theme');
    setIsToggled(initialTheme === 'dark');
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsToggled(!isToggled);
  };

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
      <div className="toggle-container">
        <Eclipse
          duration={750}
          toggled={isToggled}
          onToggle={handleToggle}
          className="custom-Eclipse-toggle"
        />
      </div>
    </div>
  );
};

export default Navbar;
