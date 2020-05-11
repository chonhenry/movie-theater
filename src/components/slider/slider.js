import React from "react";
import { connect } from "react-redux";
import "./slider.scss";

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    );
  }
}

export default Slider;
