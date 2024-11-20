import React, { useState } from 'react';
import './HeaderBar.css';
import Sidebar from '../HomePage/Sidebar';

const HeaderBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="header-bar">
        <span className="contact-email">📧 Shreeanukulinfra@gmail.com</span>
        <span className="location">📍 51-52 Subh Commercial, Kandivali East</span>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a onClick={toggleSidebar} className="sidebar-icon">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <button className="quote-btn">GET A QUOTE</button>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default HeaderBar;
