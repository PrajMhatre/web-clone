import React from "react";
import Slider from "react-slick";
import "./Clients.css";

// Import images from src folder
import MIDC from "../../assets/MIDC.png";
import WesternRailway from "../../assets/WESTERN-RAILWAY-LOGO.png";
import MaharashtraJeevan from "../../assets/MJP-LOGO.png";
import NagarPalika from "../../assets/Nagar-Palika-.png";
import STEM from "../../assets/STEM-LOGO.png";
import CentralRailway from "../../assets/CENTRAL-RAILWAY-LOGO-1.png";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Client data with imported images
  const clients = [
    { id: 1, image: MIDC, name: "MIDC" },
    { id: 2, image: WesternRailway, name: "Western Railway" },
    { id: 3, image: MaharashtraJeevan, name: "Maharashtra Jeevan" },
    { id: 4, image: NagarPalika, name: "Nagar Palika" },
    { id: 5, image: STEM, name: "STEM" },
    { id: 6, image: CentralRailway, name: "Central Railway" },
  ];

  return (
    <div className="client-carousel">
      {/* Carousel Header */}
      <div className="carousel-header">
        <h2>OUR CLIENTS</h2>
        <p>
          "Empowering businesses with robust infrastructure solutions to fuel growth and innovation."
        </p>
      </div>

      {/* Carousel Slider */}
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.id} className="client-item">
            <img
              src={client.image}
              alt={client.name}
              className="client-logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
