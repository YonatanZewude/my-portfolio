import React from 'react';
import '../styles/_cv.scss';
import cvImage from '../assets/images/Yonatan_Zewude_CV.png';

const CV: React.FC = () => {
  return (
    <div className="cv-page">
      <div className="container">
        <h2>My CV</h2>
        <img src={cvImage} alt="Yonatan Zewude CV" className="cv-image" />
      </div>
    </div>
  );
};

export default CV;
