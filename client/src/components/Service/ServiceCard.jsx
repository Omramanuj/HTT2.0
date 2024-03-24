import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './ServiceCard.css'; // Assuming you have some global styles in here
import { usePageVisits } from '../../PageVisitContext';

const ServiceCard = ({ image, title, dbname,description,link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { incrementPageVisit } = usePageVisits();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    incrementPageVisit(dbname); // Use title to increment the visit count
  };

  const cardStyles = {

    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '200px',
    marginBottom: '2rem', // Increased bottom margin for spacing between cards
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const infoBoxStyles = {
    position: 'absolute',
    top: '10px', // Position from the top
    left: '10px', // Position from the left
    backgroundColor: 'white', // White background for the info box
    padding: '10px', // Padding inside the box
    borderRadius: '8px', // Optional: border radius for the info box
    zIndex: '1', // Ensure the info box is above the image
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const titleStyles = {
    fontSize: '1rem', // Adjusted font size
    fontWeight: 'bold',
    fontStyle: 'Cedarville Cursive',
    color: '#436850',
  };

  const descriptionStyles = {
    fontSize: '0.8rem', // Smaller than the title
    color: 'black',
    marginTop: '5px', // Space between title and description
  };

  const arrowStyles = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: '2',
    color: 'black',
    fontSize: '2rem',
    backgroundColor: isHovered ? 'lightgreen' : 'transparent', // Transparent background when not hovered
    transition: 'background-color 0.3s ease',
    padding: '5px',
  };

  return (
    <div style={cardStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <a href={link} target='_blank'>
      <img src={image} alt={title} style={imageStyles} />
      <div style={infoBoxStyles}>
        <div style={titleStyles} className='cedarville-cursive-regular'>{title}</div>
        <div style={descriptionStyles} >{description}</div>
      </div>
      <ArrowRightAltIcon style={arrowStyles} color="inherit" />
      </a>
    </div>
  );
};

export default ServiceCard;
