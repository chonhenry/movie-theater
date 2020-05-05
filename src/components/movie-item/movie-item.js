import React from "react";
import { Link } from "react-router-dom";
import "./movie-item.scss";

const MovieItem = (props) => {
  return <div>{props.children}</div>;
};

export default MovieItem;
