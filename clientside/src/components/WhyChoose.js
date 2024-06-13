import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import f1 from "../assets/icon/feature1.png";
import f2 from "../assets/icon/feature2.png";
import f3 from "../assets/icon/feature3.png";
import f4 from "../assets/icon/feature4.png";
import "./WhyChooseStyle.css";

const features = [
  {
    imgSrc: f1,
    imgAlt: "Customized Solutions",
    title: "CUSTOMIZED SOLUTIONS",
    description:
      "Empower your success with our tailored solutions, designed uniquely for you.",
    animation: "fade-up"
  },
  {
    imgSrc: f2,
    imgAlt: "ROI-Driven Approach",
    title: "ROI-DRIVEN APPROACH",
    description:
      "Maximize your returns with our ROI-driven approach,every investment delivers measurable results.",
    animation: "fade-down"
  },
  {
    imgSrc: f3,
    imgAlt: "Creative Solution",
    title: "CREATIVE SOLUTION",
    description:
      "Innovative thinking meets real-world challenges with our creative solutions, sparking meaningful impact.",
    animation: "fade-up"
  },
  {
    imgSrc: f4,
    imgAlt: "Expert Team",
    title: "EXPERT TEAM",
    description:
      "Trust in our expert team to deliver exceptional results, fueled by deep knowledge and unwavering dedication and great results.",
    animation: "fade-down"
  }
];

function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section className="feature">
      <div className="container">
        <h1>WHY CHOOSE US</h1>
        <div className="flex">
          {features.map((feature, index) => (
            <div
              className="header-card"
              data-aos={feature.animation}
              key={index}
            >
              <div>
                <figure>
                  <img
                    src={feature.imgSrc}
                    className="feature-img1"
                    alt={feature.imgAlt}
                  />
                </figure>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
