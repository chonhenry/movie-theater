import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchMovieDetail,
  fetchCrewsCasts,
  fetchMovieReview,
} from "../../actions/index";
import "./movie-detail.scss";
import Slider from "../../components/slider/slider";
import ActorCard from "../../components/actor-card/actor-card";

class MovieDetail extends React.Component {
  review = [];
  componentDidMount = async () => {
    this.props.fetchMovieDetail(window.location.pathname.slice(7));
    this.props.fetchCrewsCasts(window.location.pathname.slice(7));
    this.props.fetchMovieReview(window.location.pathname.slice(7));

    this.review = await fetch(
      "https://api.themoviedb.org/3/movie/299536/reviews?api_key=c3cea5dfe524b09cb4548284a077e8f0&language=en-US&page=1"
    );
    this.review = await this.review.json();
    this.review = this.review.results;
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

  renderCasts = () => {
    let casts_arr = this.props.casts
      .slice(0, 10)
      .map((c) => <ActorCard cast={c} key={c.id} />);

    casts_arr.push(
      <Link to="" className="more-actor" key="view-more">
        <strong>View More</strong>
      </Link>
    );

    // console.log(this.props.moviewReview);
    return casts_arr;
  };

  renderRecommendations = () => {};

  renderReview = () => {
    return this.props.moviewReview.map((r) => {
      return (
        <div className="review-box" key={r.id}>
          <div className="review-author">
            Written By <span className="author-name">{r.author}</span>
          </div>
          <div className="review-paragraph">{r.content}</div>
        </div>
      );
    });
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

        <div className="section-title">
          <div className="title">You Might Also Like</div>
        </div>
        <div className="recommendations-container">
          <div className="recommendations-list">
            <Slider>{this.props.casts ? this.renderCasts() : null}</Slider>
          </div>
        </div>

        <div className="section-title">
          <div className="title">Casts</div>
        </div>
        <div className="casts-container">
          <div className="casts-list">
            <Slider>{this.props.casts ? this.renderCasts() : null}</Slider>
          </div>
        </div>

        <div className="section-title">
          <div className="title">Review</div>
        </div>
        <div className="review-container">
          <div className="review">{this.renderReview()}</div>
        </div>
        <div className="more-reviews">
          <Link to="#" className="title">
            More Reviews
          </Link>
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
    casts: state.crewsCasts.cast,
    moviewReview: state.moviewReview.slice(0, 4),
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetail,
  fetchCrewsCasts,
  fetchMovieReview,
})(MovieDetail);
