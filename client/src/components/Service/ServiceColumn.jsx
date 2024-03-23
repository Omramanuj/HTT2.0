// ServiceColumn.jsx
import React from 'react';
import './ServiceColumn.css'; // Ensure to create this CSS file

const ServiceColumn = ({ diseases }) => {
  return (
    <div className="service-column-container">
      <div className="service-column-title">
        <h2>Our Special Treatment For Diseases</h2>
        <p>We take care of other health issues as well through our diet program.</p>
      </div>
      <div className="service-column-list">
        {diseases.map((disease, index) => (
          <div key={index} className="service-column-item">
            {disease}
          </div>
        ))}
      </div>
      <div className="service-column-footer">
        <p>SAS FAT TO SLIM recognized for the pioneering & innovative work in the field of Obesity Control & Management with particular emphasis on developing new and effective ways & programs to combat Obesity.</p>
        <button className="service-column-button">Book Now Appointment</button>
      </div>
    </div>
  );
};

export default ServiceColumn;
