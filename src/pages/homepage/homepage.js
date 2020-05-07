import React from "react";
import MovieList from "../../components/movie-list/movie-list";
import Box from "../../components/box/box";
import MovieItem from "../../components/movie-item/movie-item";
import { connect } from "react-redux";
import { fetchNowPlayingMovie, fetchUpcomingMovie } from "../../actions/index";
import "./homepage.scss";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovie();
    this.props.fetchUpcomingMovie();
  }

  renderNowPlaying() {
    return this.props.nowPlaying.map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });
  }

  renderUpcoming() {
    return this.props.upcoming.map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });
  }

  render() {
    // console.log(this.props.nowPlaying);
    return (
      <div className="homepage container">
        <div className="top-menu">
          <Box linkTo="/">Latest</Box>
          <Box linkTo="/">Now Playing</Box>
          <Box linkTo="/">Top Rated</Box>
          <Box linkTo="/">Upcoming</Box>
        </div>
        <h1>Now Playing</h1>
        <MovieList>{this.renderNowPlaying()}</MovieList>
        <h1>Upcoming</h1>
        <MovieList>{this.renderUpcoming()}</MovieList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying.slice(0, 5),
    upcoming: state.upcoming.slice(0, 5),
  };
};

export default connect(mapStateToProps, {
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
})(Homepage);
