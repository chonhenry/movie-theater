import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./movie-item.scss";
import { selectMovie } from "../../actions/index";

// const MovieItem = ({ movie }) => {
//   // console.log(movie.poster_path);
//   // movie ? console.log(movie.title) : console.log("loading");
//   return (
//     <div
//       className="ui card movie"
//       onClick={() => {
//         selectMovie(movie);
//       }}
//     >
//       <Link className="poster-link" to={`movie:${movie.id}`}>
//         <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} />
//       </Link>

//       <Link className="movie-title" to={`movie:${movie.id}`}>
//         {movie.title}
//       </Link>
//     </div>
//   );
// };

class MovieItem extends React.Component {
  render() {
    return (
      <div
        className="ui card movie"
        onClick={() => {
          this.props.selectMovie(this.props.movie);
        }}
      >
        <Link className="poster-link" to={`movie:${this.props.movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${this.props.movie.poster_path}`}
          />
        </Link>

        <Link className="movie-title" to={`movie:${this.props.movie.id}`}>
          {this.props.movie.title}
        </Link>

        <p>movie</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieItem);
