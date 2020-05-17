import React from "react";
import { changeSearchterm, searchMovie } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./searchBox.scss";

class SearchBox extends React.Component {
  onChangeSearchterm = (e) => {
    this.props.changeSearchterm(e.target.value);
  };

  render() {
    return (
      <div className="searchBox">
        <Link
          to={`/search=${this.props.searchTerm}`}
          className="fas fa-search fa-2x"
          onClick={this.props.click}
        ></Link>
        <input
          className="search-input"
          type="text"
          placeholder="Search Movie"
          onChange={(e) => this.onChangeSearchterm(e)}
        ></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { changeSearchterm, searchMovie })(
  SearchBox
);
