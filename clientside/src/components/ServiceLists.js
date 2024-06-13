import React from "react";
import "./ServiceListsStyles.css";
import ServiceListsData from "./ServiceListsData";
import gd from "../assets/website/graphics-designing.png";
import ui from "../assets/website/ui.jpg";
import web from "../assets/website/web.jpg";

function ServiceLists() {
  return (
    <div className="serviceList">
      <h1>Our Services</h1>
      <p>You can discover our services for your business.</p>
      <div className="serviceListcard">
        <ServiceListsData
          image={gd}
          heading="Graphics Designing"
          text="Our graphic design services create visually compelling content to communicate your message effectively. We specialize in logos, branding, advertisements, posters, and digital media, blending art and technology to deliver impactful designs that resonate with your audience."
        />
        <ServiceListsData
          image={ui}
          heading="UI/UX Designing"
          text="Our UI/UX design services enhance user interaction with your digital products. We focus on crafting visually appealing interfaces and ensuring a seamless, satisfying user experience through comprehensive research, wireframing, prototyping, and usability testing. Let us optimize your product's functionality and user satisfaction."
        />
        <ServiceListsData
          image={web}
          heading="Website Designing & Development"
          text="Our web design and development services bring your ideas to life. We build responsive, high-performance websites tailored to your specific needs. From front-end design to back-end development, we ensure a smooth, engaging user experience across all devices."
        />
      </div>
    </div>
  );
}

export default ServiceLists;
