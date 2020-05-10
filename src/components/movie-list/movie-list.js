import React from "react";
import "./movie-list.scss";

const MovieList = (props) => {
  return (
    //<div className="movie-list">{props.children.map((movie) => movie)}</div>
    <div className="movie-list">{props.children}</div>
  );
};

export default MovieList;
