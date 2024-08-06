import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={require('../assets/images/logo2.png')} alt="Logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={isOpen ? "open" : ""}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about-experience-skills" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>My CV</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
