import React from 'react';
import './Work.css'; // Ensure the correct path for the CSS file

const WorkSection = () => {
  return (
    <div className="work-section">
      <div className="overlay"></div>
      <div className="work-content left-aligned">
        <h1 className="title">WORK PROCESS</h1>
        <h2>4 Simple Steps to Follow</h2>
        <div className="step-container">
          <div className="step">
            <i className="fas fa-calendar-check"></i>
            <h3>Schedule Your Appointment</h3>
          </div>
          <div className="step">
            <i className="fas fa-lightbulb"></i>
            <h3>Get Professional Advices</h3>
          </div>
          <div className="step">
            <i className="fas fa-user-tie"></i>
            <h3>Meet Our Best Experts</h3>
          </div>
          <div className="step">
            <i className="fas fa-trophy"></i>
            <h3>Get Our Best Services</h3>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WorkSection;