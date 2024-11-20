import React from "react";
import "./Introduction.css"; // Import CSS for styling
import constructionImage from "../../assets/construction.jpg"; // Import the image
import profileImage from "../../assets/profile-pic.png"; // Import the image

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-content">
        {/* Left side: Image */}
        <div className="introduction-image">
          <img
            src={constructionImage}
            alt="Construction site showing ongoing work"
          />
        </div>

        {/* Right side: Text Content */}
        <div className="introduction-text">
          <h2>OUR INTRODUCTION</h2>
          <h3>For A Better Future Know About US !</h3>
          <p>
            Originally established as Anukul Construction in 1998 under the
            leadership of Mr. Prabhakar Mahajan, the company underwent a
            transformation in 2010, becoming Shree Anukul India Pvt Ltd and
            subsequently adopting its current name, Shree Anukul Infra Ltd.
          </p>
          <p>
            As a Grade 'AA' contractor registered with MCGM and a Class 1(A)
            Contractor with PWD, Maharashtra, Shree Anukul Infra Ltd maintains a
            distinguished standing in the construction industry.
          </p>

          {/* Boxed list with tick mark icon */}
          <div className="quality-list-container">
            <ul className="quality-list">
              <li><span className="tick-icon">✔</span>Highly Professional Staff</li>
              <li><span className="tick-icon">✔</span>Accurate Testing Processes</li>
              <li><span className="tick-icon">✔</span>Unrivalled workmanship, Professional and Qualified</li>
            </ul>
          </div>

          {/* Profile Section: Image and Text on the same line */}
          <div className="profile-section">
            <img
              src={profileImage}
              alt="Mr. Prem Mahajan - Managing Director"
              className="profile-image"
            />
            <div className="profile-text">
              <h5>MR. PREM MAHAJAN</h5>
              <p>Managing Director, Civil Engineer</p>
            </div>
          </div>
          <button className="more-btn">MORE ABOUT US</button>
        </div>
      </div>
      
    </div>
  );
};

export default Introduction;
