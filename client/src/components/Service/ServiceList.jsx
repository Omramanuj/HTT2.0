import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceList() {
  const services = [
    {
      title: 'Strategies',
      dbname: 'nutritionStrategy',
      image: 'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-01-770x350.jpg',
      description:'Nutrition Strategy',
      link:"https://www.health.harvard.edu/topics/diet-and-weight-loss#diet-weight-loss0",
    },
    {
      title:'Ayurveda',
      dbname: 'ayurveda',
      image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-02-770x350.jpg',
      description:'Ayurveda Treatment',
      link:"https://www.healthline.com/health/ayurvedic-medicine-for-weight-loss#otc-capsules",
  },

{
  title:'protien',
  dbname: 'protien',
  image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-04-770x350.jpg',
  description:'diet and fitness',
  link:"https://www.betterhealth.vic.gov.au/health/healthyliving/protein",
},
{
  title:'diet',
  dbname: 'diet',
  image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-03-770x350.jpg',
  description:'Nutritionally balanced',
  link:"https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/#:~:text=eat%20at%20least%205%20portions,eggs%2C%20meat%20and%20other%20protein",
},



  ];

  // Inline styles for the service list container
  const listContainerStyle = {
    border: '1px solid #ccc', // Add a gray border
    backgroundColor: '#15803d', // Your provided color for background
    margin: '20px',
    padding: '20px', // Add some padding inside the container
    borderRadius: '8px', // Rounded corners for the container
  };

  return (
    <div className='ServiceList' style={listContainerStyle}>
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} dbname={service.dbname} image={service.image} description={service.description} link = {service.link}/>
      ))}
    </div>
  );
}


