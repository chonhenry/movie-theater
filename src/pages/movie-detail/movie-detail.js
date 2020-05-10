import React from "react";
import { connect } from "react-redux";
import "./movie-detail.scss";
import { fetchMovieDetail } from "../../actions/index";

class MovieDetail extends React.Component {
  componentDidMount = () => {
    this.props.fetchMovieDetail(window.location.pathname.slice(7));
  };

  render() {
    return (
      <div className="movie-detail">
        <div
          className="banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${this.props.banner})`,
          }}
        >
          <div className="background-cover"></div>
          <div className="movie-info-container">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w780${this.props.poster}`}
            ></img>
            <div className="movie-info">
              <div className="movie-title">
                <strong>{this.props.title}</strong>
              </div>
              <div className="date-genre-length">{`${this.props.release_date} • ${this.props.runtime}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let hr = Math.floor(state.movieDetail.runtime / 60);
  let min =
    state.movieDetail.runtime - Math.floor(state.movieDetail.runtime / 60) * 60;
  let genres = state.movieDetail.genres;
  // let genres_arr = genres.map((g) => g.name);
  console.log(genres);

  return {
    movieDetail: state.movieDetail,
    banner: state.movieDetail.backdrop_path,
    poster: state.movieDetail.poster_path,
    title: state.movieDetail.title,
    release_date: state.movieDetail.release_date,
    runtime: `${hr}h ${min}m`,
  };
};

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetail);
