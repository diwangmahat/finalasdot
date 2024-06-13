import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceListsStyles.css";

function ServiceListsData(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="t-card" data-aos="fade-up">
      <div className="t-image">
        <img src={props.image} alt="servicesL" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default ServiceListsData;
