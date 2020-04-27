import React from "react";
import { Link } from "react-router-dom";
import "./box.scss";

const Box = (props) => {
  return (
    <Link to={props.linkTo} className="box">
      {props.children}
    </Link>
  );
};

export default Box;
