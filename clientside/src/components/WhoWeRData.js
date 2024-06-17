import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhoWeRStyle.css";

const WhoWeRData = ({ className, text, img1, img2, features, hideDiscoverMore }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className={`${className}`}>
      <div className="des-text" data-aos="fade-up">
        <p>{text}</p>
        <div className="additional-info">
          {features.map((feature, index) => (
            <div className="flex" key={index} data-aos="fade-up">
              <i className={feature.icon}></i>
              <h5>{feature.text}</h5>
            </div>
          ))}
          <div className="flex mt-30" data-aos="fade-up">
            <a href="/contact" className="btn_hover1">
              Get Started
            </a>
            {!hideDiscoverMore && (
              <a href="/about" className="btn_hover2">
                Discover More
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="image">
        <img src={img1} alt="img1" data-aos="fade-right" />
        <img src={img2} alt="img2" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default WhoWeRData;
