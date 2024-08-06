import React from 'react';
import '../styles/main.scss';
import Map from './map'; // Import the Map component

const Footer: React.FC = () => {
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
              <li><a href="/">Home</a></li>
              <li><a href="/about-experience-skills">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">My CV</a></li>
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
