import React from 'react';
import '../styles/main.scss';
import profileImage from '../assets/images/profile1.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="intro">
        <h1>Hi, I'm Yonatan Zewude</h1>
<p className="profession">a <span>Web Developer specializing in e-commerce.</span></p>
<p className="description">I'm currently studying at Medieinstitutet in Stockholm, enhancing my skills in HTML, CSS, SASS, JavaScript, TypeScript, React, and SQL. With a focus on both front-end and back-end development, I am eager to apply my knowledge in a real-world setting. Fluent in Swedish, English, and Amharic, I bring diverse communication skills to my work. Looking for an internship in web development (Weeks 40 - 49, 2024). Let's connect and build something amazing together!</p>
<div className="social-links">
            <a href="https://github.com/YonatanZewude" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yonatan-zewude-52a993264/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Yonatan Zewude" />
        </div>
      </div>
    </div>
  );
};

export default Home;
