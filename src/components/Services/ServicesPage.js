import React from "react";
import './ServicesPage.css';
import serviceImage from "../../assets/service.png";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h5>OUR SERVICES</h5>
        <h2>SERVICES WE PROVIDE</h2>
      </div>
      <div className="services-container">
        <div className="services-left">
          <div className="service-item">
            <h3>01.</h3>
            <h4>RUB (ROAD UNDER BRIDGE)</h4>
            <p>
              Redefining urban connectivity, our Road Under Bridge solutions
              facilitate efficient traffic flow by creating seamless pathways
              beneath roads. Engineered for optimal functionality, these
              structures enhance transportation networks and contribute to the
              overall infrastructure efficiency.
            </p>
          </div>
          <div className="service-item">
            <h3>02.</h3>
            <h4>FOB (FOOT OVER BRIDGE)</h4>
            <p>
              Enhance pedestrian safety and connectivity with our expertly
              designed Foot Over Bridges (FOBs). These elevated structures
              provide a secure and convenient passage over busy roads, 
              ensuring smooth pedestrian flow and contributing to a safer 
              urban environment. Our FOB solutions prioritize functionality,
              aesthetics, and adherence to safety standards, making them an 
              integral part of modern urban infrastructure.
            </p>
          </div>
          <div className="service-item">
            <h3>03.</h3>
            <h4>BRIDGES / ROADS / DAMS</h4>
            <p>
              Connecting communities seamlessly, our bridge projects exemplify
              engineering excellence, ensuring safe and efficient passage.
            </p>
            <p>
              Roads: Transforming landscapes with precision, our road 
              construction services pave the way for progress, connecting 
              destinations and facilitating smoother journeys.
            </p>
            <p>
              Dam: Harnessing the power of water responsibly, our dam 
              construction projects stand as robust symbols of sustainable
              resource management and environmental resilience.
            </p>
          </div>
        </div>
        <div className="services-image">
          <img src={serviceImage} alt="Service" />
        </div>
        <div className="services-right">
          <div className="service-item">
            <h3>04.</h3>
            <h4>WATER SUPPLY PIPELINES</h4>
            <p>
              We specialize in designing and implementing state-of-the-art
              water supply pipelines, ensuring a consistent and sustainable
              water flow to meet the evolving needs of communities.Our
              expertise lies in the installation of cutting-edge water
              supply pipelines, guaranteeing efficient and reliable 
              distribution systems for residential, commercial, and 
              industrial projects.
            </p>
          </div>
          <div className="service-item">
            <h3>05.</h3>
            <h4>DRAINAGE PIPELINES</h4>
            <p>
              Ensuring seamless water management, our drainage pipeline services
              exemplify precision and reliability.From design to installation,
              we specialize in constructing efficient drainage systems that 
              mitigate flooding risks and contribute to sustainable urban 
              development. Trust us to deliver solutions that safeguard 
              communities and infrastructure against water-related challenges.
            </p>
          </div>
          <div className="service-item">
            <h3>06.</h3>
            <h4>REPAIR OF BRIDGES</h4>
            <p>
            Our expert team specializes in the comprehensive repair and 
            restoration of bridges. From structural enhancements to surface 
            refurbishments, we are dedicated to ensuring the longevity and 
            safety of vital transportation links. Trust us for seamless 
            bridge repairs that prioritize durability, functionality 
            and public safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
