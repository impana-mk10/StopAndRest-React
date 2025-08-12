import React, { useState, useEffect } from 'react';
import '../../index.css';
import './HeaderMain.css'; // Ensure to create and include this CSS file

function HeaderMain() {
  const image1 = require('../assets/images/home1.jpg');
  const image2 = require('../assets/images/home2.jpg');
  const image3 = require('../assets/images/h3.jpg');
  const image4 = require('../assets/images/home4.webp');
  const image5 = require('../assets/images/home5.jpg');

  const imageUrls = [image1, image2, image3, image4, image5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); // 2 seconds for each image
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="unique-header-banner">
      <div
        className="unique-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrls[currentImageIndex]})`,
        }}
      ></div>
      <div className="unique-animated-texts unique-overlay-content">
        <h1>
          Welcome to <span className="unique-hotel-color">StopAndRest</span>
        </h1>
        <h4>Experience the best hospitality in Town</h4>
      </div>
    </header>
  );
}

export default HeaderMain;
