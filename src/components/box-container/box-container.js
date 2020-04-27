import React from "react";
import "./box-container.scss";

const BoxContainer = (props) => {
  return (
    <div className="box-container">{props.children.map((box) => box)}</div>
  );
};

export default BoxContainer;
