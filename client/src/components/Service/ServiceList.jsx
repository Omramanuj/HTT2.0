import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceList() {
  const services = [
    {
      title: 'Strategies',
      image: 'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-01-770x350.jpg',
      description:'Nutrition Strategy'
    },
    {title:'Ayurveda',
image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-02-770x350.jpg',
description:'Ayurveda Treatment'},
{
  title:'Protien',
  image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-04-770x350.jpg',
  description:'diet and fitness'
},
{
  title:'Diet',
  image:'https://fattoslimmbd.com/wp-content/uploads/sites/3/2020/06/service-03-770x350.jpg',
  description:'Nutritionally balanced'
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
        <ServiceCard key={index} title={service.title} image={service.image} description={service.description}/>
      ))}
    </div>
  );
}
