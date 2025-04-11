import React, { useState, useEffect } from "react";
import "./Carousel.css";
import nodeImg from './Components/nodeImg.png'
import reactImg from './Components/reactImg.png'
import expressImg from './Components/expressImg.png'
import postgreImg from './Components/postgreImg.png'

const carouselData = [
  { id: 1, img: postgreImg , text: "Learn PostgreSQL with ease!" },
  { id: 2, img: expressImg, text: "Master Express.js for backend" },
  { id: 3, img: reactImg, text: "Build dynamic UIs with React!" },
  { id: 4, img: nodeImg, text: "Deploy full-stack apps with Node.js!" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {carouselData.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={item.img} alt={`Slide ${item.id}`} />
          <div className="carousel-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

