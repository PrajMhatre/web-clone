import React from 'react';
import './ProjectList.css'; // Ensure your CSS file is linked

import image1 from '../../assets/project1.png'; // Example image import
import image2 from '../../assets/project2.png'; // Example image import
import image3 from '../../assets/project3.jpg'; // Example image import
import image4 from '../../assets/project4.jpg'; // Example image import
import image5 from '../../assets/project5.png'; // Example image import
import image6 from '../../assets/project6.png'; // Example image import

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2 className="title">PROJECT LIST</h2>
      <p className="subtitle">CHECKOUT OUR RECENT PROJECT</p>
      
      <table className="project-table">
        <tbody>
          <tr>
            <td className="image-cell">
              <img src={image1} alt="Project 1" />
            </td>
            <td className="image-cell">
              <img src={image2} alt="Project 2" />
            </td>
            <td className="image-cell">
              <img src={image3} alt="Project 3" />
            </td>
          </tr>
          <tr>
            <td className="image-cell">
              <img src={image4} alt="Project 4" />
            </td>
            <td className="image-cell">
              <img src={image5} alt="Project 5" />
            </td>
            <td className="image-cell">
              <img src={image6} alt="Project 6" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
