import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={require("../../assets/hero.png")} alt="Logo" className="logo" />
      <div className="nav-links-group">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Pages</a>
            <ul className="dropdown-content">
              <li><a href="#">Services</a></li>
              <li className="dropdown-submenu">
                <a href="#">Projects</a>
                <ul className="submenu-content">
                  <li><a href="#">Ongoing Projects</a></li>
                  <li><a href="#">Completed Projects</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li className="dropdown investors-dropdown">
            <a href="#" className="investors-dropbtn">Investors</a>
            <ul className="investors-dropdown-content">
            <li><a href="#">Corporate Governance</a></li>
              <li><a href="#">Shareholders Meeting</a></li>
              <li><a href="#">Annual Report & Financial Result</a></li>
              <li><a href="#">Compliance Certificate</a></li>
              <li><a href="#">Registrar & Transfer Agent</a></li>
              <li><a href="#">Shareholding Pattern</a></li>
              <li><a href="#">Reconciliation of Share Capital Audit</a></li>
              <li><a href="#">Board Meeting</a></li>
              <li><a href="#">Annual Return</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="appointment-group">
        <ul className="nav-links appointment">
          <li>
            <a href="tel:+919820076716">
              <i className="fas fa-phone-alt call-icon"></i> {/* Font Awesome call icon */}
              BOOK APPOINTMENT
            </a><br />
            <span>(+91) 9820076716</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
