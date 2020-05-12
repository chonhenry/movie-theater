import React from "react";
import { Link } from "react-router-dom";
import "./slider.scss";

class Slider extends React.Component {
  render() {
    return <div className="slider">{this.props.children}</div>;
  }
}

export default Slider;
