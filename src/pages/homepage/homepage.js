import React from "react";
import MovieList from "../../components/movie-list/movie-list";
import Box from "../../components/box/box";
import MovieItem from "../../components/movie-item/movie-item";
import NewsItem from "../../components/news-item/news-item";
import { connect } from "react-redux";
import {
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
  fetchMovieNews,
  fetchNytMovieNews,
} from "../../actions/index";
import "./homepage.scss";

class Homepage extends React.Component {
  tmdb_api_key = "c3cea5dfe524b09cb4548284a077e8f0";
  news_api_key = "ca3b66ada4d24ab385fd3de0f0ccfbcd";

  componentDidMount() {
    this.props.fetchNowPlayingMovie(this.tmdb_api_key);
    this.props.fetchUpcomingMovie(this.tmdb_api_key);
    this.props.fetchMovieNews(this.news_api_key);
    this.props.fetchNytMovieNews();
    window.scrollTo(0, 0);
  }

  renderNowPlaying = () => {
    return this.props.nowPlaying.map((movie) => {
      return (
        <MovieItem
          movie={movie}
          key={movie.id}
          // onClick={() => console.log(1111)}
        />
      );
    });
  };

  renderUpcoming = () => {
    return this.props.upcoming.map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });
  };

  rednerNews = () => {
    console.log(this.props.nytNews);
    // New York Times API
    return this.props.nytNews.map((news) => {
      return <NewsItem news={news} key={news._id} />;
    });

    // for https://newsapi.org/
    // return this.props.news.map((news) => {
    //   return <NewsItem news={news} key={news.url} />;
    // });
  };

  render() {
    return (
      <div className="homepage container">
        {/* <div className="top-menu">
          <Box linkTo="/">Latest</Box>
          <Box linkTo="/">Now Playing</Box>
          <Box linkTo="/">Top Rated</Box>
          <Box linkTo="/">Upcoming</Box>
        </div> */}
        <h1>Now Playing</h1>
        <MovieList>{this.renderNowPlaying()}</MovieList>
        <h1>Upcoming</h1>
        <MovieList>{this.renderUpcoming()}</MovieList>
        <h1>Movie News</h1>
        <div className="news-container">{this.rednerNews()}</div>
        <p>
          Powered by{" "}
          <a
            className="news-api"
            href="https://developer.nytimes.com/"
            target="_blank"
          >
            NYT's APIs
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying.slice(0, 5),
    upcoming: state.upcoming.slice(0, 5),
    news: state.news.slice(0, 6),
    nytNews: state.nytNews.filter((news) => news.multimedia[0]).slice(0, 6),
  };
};

export default connect(mapStateToProps, {
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
  fetchMovieNews,
  fetchNytMovieNews,
})(Homepage);
