import React from "react";
import "./toggle-button.scss";

const ToggleButton = (props) => {
  return (
    <button className="toggle-btn" onClick={props.click}>
      <div className="toggle-btn-line" />
      <div className="toggle-btn-line" />
      <div className="toggle-btn-line" />
    </button>
  );
};

export default ToggleButton;
 