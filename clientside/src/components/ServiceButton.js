import React from "react";
import "./ServiceListsStyles.css";

function ServiceButton(props) {
  return (
    <button className="serviceButton" onClick={() => {}}>
      <a href={props.url}>
        Explore More
      </a>
    </button>
  );
}

export default ServiceButton;
