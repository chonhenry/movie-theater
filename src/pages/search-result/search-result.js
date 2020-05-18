import React from "react";
import { searchMovie, toogleBackdrop } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./search-result.scss";

class SearchResult extends React.Component {
  componentDidMount = async () => {
    await this.props.searchMovie(this.props.match.params.searchTerm);
  };

  renderSearchResult = (result) => {
    if (result) {
      console.log(result.poster_path);
      return (
        <div className="result-item">
          <Link className="poster-link" to={`/movie:${result.id}`}>
            {result.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w780/${result.poster_path}`}
                alt="poster"
              />
            ) : (
              <div className="no-image">
                <i className="fas fa-image fa-3x"></i>
              </div>
            )}
          </Link>
          <div className="item-info">
            <Link to={`/movie:${result.id}`} className="movie-title">
              {result.title}
            </Link>
            <div className="release-date">{result.release_date}</div>
            <div className="overview">
              {result.overview.length > 460
                ? result.overview.slice(0, 460) + "..."
                : result.overview}
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="search-results">
        <div className="search-results-container">
          <div className="section-title">Search Results</div>
          <div className="result-list">
            {this.props.searchMovieResult.length > 0 ? (
              this.props.searchMovieResult.map((item) =>
                this.renderSearchResult(item)
              )
            ) : (
              <div className="no-result">
                0 results found for "{this.props.match.params.searchTerm}"
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchMovieResult: state.searchMovie,
  };
};

export default connect(mapStateToProps, { searchMovie, toogleBackdrop })(
  SearchResult
);
