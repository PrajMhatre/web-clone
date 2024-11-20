import React from "react";
import "./ContactPage.css";
import backgroundImage from "../../assets/background.jpeg";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section: Map */}
        <div className="contact-map">
          <h2>CONTACT US</h2>
          <h3>OUR REGISTERED OFFICE ADDRESS</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.810390784812!2d72.86899277496742!3d19.210331952772515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a92c1f5449%3A0x7aa84c9672cbcbad!2sAkurli%20Rd%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1689331669443!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section: Contact Form */}
        <div
          className="contact-form"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your message (optional)"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
