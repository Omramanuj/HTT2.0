import React from 'react';

const DemographicsSummary = () => {
  // Key points data (fabricated for demonstration)
  const data = {
    averageBMI: 23.5,
    highlightPage: 'Nutrition Tips',
    popularAgeGroup: '25-34 years'
  };

  return (
    <div style={{ height:'100%', display: 'flex', background: '#fff', padding: '20px',margin:'20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)',  margin: '20px auto' }}>
      
      <div className='flex flex-col justify-around'>
        <div className='text-lg '>Site Demographics Summary</div>
        <p>Average BMI of Visitors: <strong>{data.averageBMI}</strong></p>
        <p>Highlight Page: <strong>{data.highlightPage}</strong></p>
        <p>Popular Age Group: <strong>{data.popularAgeGroup}</strong></p>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <img src="/summary.svg" alt="Demographics" style={{}} />
      </div>
    </div>
  );
};

export default DemographicsSummary;
