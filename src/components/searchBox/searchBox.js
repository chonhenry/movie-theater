import React from "react";
import "./searchBox.scss";

class SearchBox extends React.Component {
  onSearchClick = (query) => {};
  render() {
    return (
      <div className="searchBox">
        <i className="fas fa-search fa-2x"></i>
        <input
          className="search-input"
          type="text"
          placeholder="Search Movie"
        ></input>
      </div>
    );
  }
}

export default SearchBox;
