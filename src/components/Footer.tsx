import React from 'react';
import '../styles/main.scss';
import Map from './map';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Me</h3>
            <p>I am Yonatan Zewude, a web developer specializing in e-commerce. I am committed to providing the best web development solutions.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about-experience-skills" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>My CV</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Me</h3>
            <ul>
              <li>Email: <span>yonatanzewude@hotmail.com</span></li>
              <li>Phone: <span>+46 76 095 62 94</span></li>
              <li>Address: <span>Stockholm, Sweden</span></li>
            </ul>
          </div>
          <div className="footer-section map">
            <h3>Find Me Here</h3>
            <Map />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yonatan Zewude. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
