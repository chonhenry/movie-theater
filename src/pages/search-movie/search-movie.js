import React from "react";
import { searchMovie } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./search-movie.scss";

class SearchMovie extends React.Component {
  componentDidMount = () => {
      
  };
  render() {
    return <div className="searchMovie">searchMovie</div>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     searchMovie: state.searchMovie,
//   };
// };

export default SearchMovie;

//export default connect(mapStateToProps, { searchMovie })(SearchMovie);
