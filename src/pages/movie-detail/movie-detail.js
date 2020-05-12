import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovieDetail, fetchCrewsCasts } from "../../actions/index";
import "./movie-detail.scss";
import Slider from "../../components/slider/slider";

class MovieDetail extends React.Component {
  componentDidMount = () => {
    this.props.fetchMovieDetail(window.location.pathname.slice(7));
    this.props.fetchCrewsCasts(window.location.pathname.slice(7));
  };

  formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  };

  formatRuntime = (runtime) => {
    var hr = Math.floor(this.props.runtime / 60);
    var min = this.props.runtime - Math.floor(this.props.runtime / 60) * 60;
    return `${hr}h ${min}m`;
  };

  renderCasts = () => {};

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

              <Link className="ticket-link" to="/">
                Buy Tickets
              </Link>

              <div className="date-genre-length">{`${this.formatDate(
                this.props.release_date
              )} • ${this.formatRuntime(this.props.runtime)} • ${
                this.props.genres ? this.props.genres : null
              }`}</div>

              <div className="overview-container">
                <div className="overview">
                  <strong>Overview</strong>
                </div>
                <div className="tagline">- {this.props.tagline}</div>
                <div className="overview-paragraph">
                  {this.props.movieDetail.overview}
                </div>
              </div>

              <div className="director-container">
                <div className="director">
                  <strong>Director</strong>
                </div>
                <div className="director-name">
                  {this.props.director ? this.props.director : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="casts-container">
          <div className="casts">
            <strong>Casts</strong>
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var genres;
  var director;

  if (state.movieDetail.genres) {
    genres = state.movieDetail.genres.map((g) => g.name).join(", ");
  }

  if (state.crewsCasts.crew) {
    director = state.crewsCasts.crew
      .filter((crew) => {
        return crew.job === "Director";
      })
      .map((d) => d.name)
      .join(", ");
  }

  return {
    movieDetail: state.movieDetail,
    banner: state.movieDetail.backdrop_path,
    poster: state.movieDetail.poster_path,
    title: state.movieDetail.title,
    tagline: state.movieDetail.tagline,
    release_date: state.movieDetail.release_date,
    genres: genres,
    runtime: state.movieDetail.runtime,
    director: director,
    casts: state.crewsCasts.casts,
  };
};

export default connect(mapStateToProps, { fetchMovieDetail, fetchCrewsCasts })(
  MovieDetail
);
