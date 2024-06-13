import React, { Component } from "react";
import "./WhoWeRStyle.css";

class WhoWeRData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <p>{this.props.text}</p>
          <div className="additional-info">
            {this.props.features.map((feature, index) => (
              <div className="flex" key={index}>
                <i className={feature.icon}></i>
                <h5>{feature.text}</h5>
              </div>
            ))}
            <div className="flex mt-30">
              <a href="/contact" className="btn_hover1">
                Get Started
              </a>
              <a href="/about" className="btn_hover2">
                Discover More
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="img1" />
          <img src={this.props.img2} alt="img2" />
        </div>
      </div>
    );
  }
}

export default WhoWeRData;
