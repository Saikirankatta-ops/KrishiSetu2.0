import React, { useState } from 'react';
import '../styles/global.css';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className="navbar-brand" 
          onClick={() => handleNavClick('home')}
        >
          <span className="brand-image" style={{fontSize: '32px'}}>🌾</span>
          <span className="brand-name">KrishiSetu</span>
        </button>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'dashboard' ? 'active' : ''}
              onClick={() => handleNavClick('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'schemes' ? 'active' : ''}
              onClick={() => handleNavClick('schemes')}
            >
              Schemes
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'resources' ? 'active' : ''}
              onClick={() => handleNavClick('resources')}
            >
              Resources
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'experts' ? 'active' : ''}
              onClick={() => handleNavClick('experts')}
            >
              Experts
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
