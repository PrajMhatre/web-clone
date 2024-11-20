import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h4 className="tagline">CONSTRUCTION INDUSTRIAL</h4>
        <h1 className="title">WHERE VISION MEETS REALITY</h1>
        <h1 className="title">REALITY</h1>
        <p className="description">
          We are a leading infrastructure company dedicated to creating sustainable solutions 
          that redefine urban living and shape a resilient future.
        </p>

        <button className="contact-btn">CONTACT US</button>
      </div>
    </div>
  );
};

export default HeroSection;
