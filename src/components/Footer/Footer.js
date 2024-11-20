import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>OUR COMPANY</h4>
          <p>A leading Company in Infrastructure since 1998</p>
        </div>

        {/* CONTACT INFORMATION Section First */}
        <div className="footer-section">
          <h4>CONTACT INFORMATION</h4>
          <p>Phone: +91-9820076716</p>
          <hr className="thin-line" />
          <p>Mail: <a href="mailto:shreeanukulinfra@gmail.com">shreeanukulinfra@gmail.com</a></p>
          <hr className="thin-line" />
          <p>Address: 51-52, Subh Commercial, Kandivali East</p>
        </div>

        {/* USEFUL LINKS Section */}
        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <hr className="thin-line" />
            <li><a href="#projects">Recent projects</a></li>
            <hr className="thin-line" />
            <li><a href="#blog">Latest blog</a></li>
            <hr className="thin-line" />
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        {/* QUICK LINKS Section */}
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#plan">Plan Implement</a></li>
            <hr className="thin-line" />
            <li><a href="#create">Create Design</a></li>
            <hr className="thin-line" />
            <li><a href="#estimate">Estimate Design</a></li>
            <hr className="thin-line" />
            <li><a href="#archive">Our Archive</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>

        <div className="copyright">
          <p>Copyright © 2024 Bosa Construction Industrial. Powered By <span>WordPress</span></p>
        </div>

        <div className="footer-logo">
          <img src={require("../../assets/hero.png")} alt="Logo" className="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
