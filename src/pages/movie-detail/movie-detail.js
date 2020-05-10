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
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${this.props.movieDetail.backdrop_path})`,
          }}
        >
          <div className="background-cover"></div>
          <div className="movie-info-container">
            <img
              src={`https://image.tmdb.org/t/p/w780${this.props.movieDetail.poster_path}`}
            ></img>
            {this.props.movieDetail.title}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
  };
};

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetail);
