import React from "react";
import { Link } from "react-router-dom";
import "./movie-item.scss";

const MovieItem = ({ movie }) => {
  // movie ? console.log(movie.title) : console.log("loading");
  return (
    <div className="ui card movie">
      <Link className="poster-link" to="/">
        <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} />
      </Link>

      <Link className="movie-title" to="/location">
        {movie.title}
      </Link>
    </div>
  );
};

export default MovieItem;
