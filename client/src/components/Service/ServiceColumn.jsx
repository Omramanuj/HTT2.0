// ServiceColumn.jsx
import React from 'react';
import './ServiceColumn.css'; // Ensure to create this CSS file
import { Link } from 'react-router-dom';

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
        <Link
          className="h-[4rem] btn btn-neutral"
          style={{ backgroundColor: '#15803d', color: "white" }}
          to="/appointment"
          id="upgrade-to-pro"
        >
          <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
          <p className='text-white'>Book An Appointment</p>
        </Link>
      </div>
    </div>
  );
};


export default ServiceColumn;
