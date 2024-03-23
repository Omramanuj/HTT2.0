import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create this CSS file

const CarouselItem = ({ image, isActive }) => (
  <div className={`carousel-item ${isActive ? 'active' : ''}`}>
    <img src={image} alt="" />
  </div>
);

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item as active

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={goPrev}>&lt;</button>
      <div className="carousel">
        {items.map((item, index) => (
          <CarouselItem key={index} image={item} isActive={index === activeIndex} />
        ))}
      </div>
      <button onClick={goNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
