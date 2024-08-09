import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={require('../assets/images/logo2.png')} alt="Logo" />
        </div>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={isOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about-experience-skills" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>My CV</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
