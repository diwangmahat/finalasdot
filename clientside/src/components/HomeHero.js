import React, { useState, useEffect } from 'react';
import "./HomeHeroStyles.css";

function HomeHero(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = props.heroImgs; // Assuming heroImgs is an array of image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, props.intervalTime || 3000); // Change image every 3 seconds or based on intervalTime prop

    return () => clearInterval(interval);
  }, [images.length, props.intervalTime]);

  return (
    <>
      <div className={props.cName}>
        <img src={images[currentImageIndex]} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={`button ${props.btnClass}`} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
