import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-table-section">
      <div className="why-header">
        <div className="header-left">
          <h5>WHY CHOOSE US</h5>
          <h2>WE OFFER BEST FOR YOU !</h2>
        </div>
        <div className="header-right">
          <button className="book-btn">BOOK APPOINTMENT</button>
        </div>
        <hr className="thin-line" />
      </div>
      <div className="why-table">
        <div className="why-row">
          <div className="why-box">
            <div className="box-content">
              <div className="icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className="text-content">
                <h3>Expert Project Management</h3>
                <p>
                  Our seasoned project managers bring years of experience, ensuring
                  that every aspect of your project is meticulously planned and executed.
                </p>
              </div>
            </div>
          </div>
          <div className="why-box">
            <div className="box-content">
              <div className="icon yellow">
                <i className="fas fa-tools"></i>
              </div>
              <div className="text-content">
                <h3>Precision in Restoration</h3>
                <p>
                  We specialize in precision-driven repairs, restoring structures to
                  their optimal condition with effective solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="why-box">
            <div className="box-content">
              <div className="icon">
                <i className="fas fa-hard-hat"></i>
              </div>
              <div className="text-content">
                <h3>Qualified Employees</h3>
                <p>
                  Our team comprises highly qualified professionals ensuring precision
                  in every aspect of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-row">
          <div className="why-box">
            <div className="box-content">
              <div className="icon yellow">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="text-content">
                <h3>Transparent Business</h3>
                <p>
                  Transparency is the cornerstone of our operations, fostering trust
                  and confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="why-box">
            <div className="box-content">
              <div className="icon">
                <i className="fas fa-gem"></i>
              </div>
              <div className="text-content">
                <h3>Outmost Quality Assurance</h3>
                <p>
                  We deliver infrastructure solutions of unparalleled quality,
                  setting benchmarks in the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="why-box">
            <div className="box-content">
              <div className="icon yellow">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="text-content">
                <h3>Proven Track Record</h3>
                <p>
                  With a proven track record, we consistently deliver on time and beyond
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
