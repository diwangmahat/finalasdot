import React from "react";
import about1 from "../assets/website/about1.jpg";
import about2 from "../assets/website/about2.jpg";
import WhoWeRData from "./WhoWeRData";
import "./WhoWeRStyle.css";

const features = [
  {
    icon: "fa-solid fa-check",
    text: "Innovative strategies designed to elevate brand visibility, engage target audiences, and foster meaningful connections."
  },
  {
    icon: "fa-solid fa-check",
    text: "Proven track record of helping businesses of all sizes achieve their digital marketing goals through comprehensive, data-driven approaches."
  }
];

const WhoWeR = () => {
  return (
    <>
      <div className="destination">
        <h1>Who We Are</h1>
        <p>Explore Our Services And Boost Your Online Presence</p>
        <WhoWeRData
          className="first-des"
          text="Welcome to Asdot Agency, where technology meets creativity. We are a leading IT and marketing agency dedicated 
                to transforming businesses through innovative digital solutions. Our team of experts specializes in web development, 
                digital marketing, SEO, and custom software solutions. We combine cutting-edge technology with strategic marketing 
                to help you achieve your business goals. Partner with us for unparalleled growth and success in the digital world."
          img1={about1}
          img2={about2}
          features={features}
        />
      </div>
    </>
  );
};

export default WhoWeR;
