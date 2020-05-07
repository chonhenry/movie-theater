import React from "react";
import MovieList from "../../components/movie-list/movie-list";
import Box from "../../components/box/box";
import MovieItem from "../../components/movie-item/movie-item";
import { connect } from "react-redux";
import { fetchNowPlayingMovie } from "../../actions/index";
import "./homepage.scss";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovie();
  }

  renderNowPlaying() {
    return this.props.nowPlayer.map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });
  }

  render() {
    // console.log(this.props.nowPlayer);
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { nowPlayer: state.nowPlayer.slice(0, 5) };
};

export default connect(mapStateToProps, { fetchNowPlayingMovie })(Homepage);
