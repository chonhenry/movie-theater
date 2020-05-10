import React from "react";
import { connect } from "react-redux";
import "./movie-detail.scss";

class MovieDetail extends React.Component {
  componentDidMount = () => {
    console.log(window.location.pathname);
    console.log(this.props.selectedMovie.title);
    if (!this.props.selectedMovie.title) {
      console.log("unde");
    }
  };

  render() {
    return (
      <div className="movie-detail container">
        {this.props.selectedMovie.title}
      </div>
    );
  }
}

// const MovieDetail = (props) => {
//   return (
//     <div className="movie-detail container">{props.selectedMovie.title}</div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetail);

//window.location.pathname
