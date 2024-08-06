import React from 'react';
import '../styles/main.scss';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-page">
      <section className="about-me">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Yonatan Zewude, a web developer specializing in e-commerce.
            I'm currently studying at Medieinstitutet in Stockholm, where I am enhancing my skills in HTML, CSS, JavaScript, React, and SQL. With a focus on both front-end and back-end development, I am eager to apply my knowledge in a real-world setting.
            Fluent in Swedish, English, and Amharic, I bring diverse communication skills to my work. Let's connect and build something amazing together.
          </p>
        </div>
      </section>
      
      <section className="experience">
        <div className="container">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Studying Web Development - E-commerce Specialist</h3>
              <p>August 2023 - June 2025, Stockholm</p>
            </li>
            <li>
  <h3>Freelance Photographer</h3>
  <p>2017 - Present</p>
  <p>Specialized in event photography and portraiture. Capture high-quality images for various occasions such as weddings, corporate events, and private portraits. Consistently develop and improve skills through personal projects and client work during free time.</p>
</li>
            <li>
              <h3>Taxi Driver</h3>
              <p>Samtrans, 2021 - 2023, Stockholm</p>
            </li>
            <li>
              <h3>Care Assistant</h3>
              <p>Ersta Diakoni, 2017 - 2021, Stockholm</p>
            </li>
            <li>
              <h3>Waiter</h3>
              <p>Vasa museum restaurant, 2015 - 2017, Stockholm</p>
            </li>
            <li>
              <h3>Care Assistant</h3>
              <p>Enskededalen servicehus, 2013 - 2015, Stockholm</p>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="skills">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>React</li>
            <li>Node.js</li>
            <li>API</li>
            <li>PHP</li>
            <li>WordPress</li>
            <li>Figma</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
