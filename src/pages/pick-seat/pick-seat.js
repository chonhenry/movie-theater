import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovieDetail, footerBottom } from "../../actions/index";
import "./pick-seat.scss";

class PickSeat extends React.Component {
  componentDidMount = async () => {
    // await this.props.footerBottom();
    // console.log(this.props.footer);
  };

  render() {
    return (
      <div className="pick-seat">
        <div className="container">
          <div className="title">Choose Your Seats</div>
          <div className="movie-title">this.props.title</div>
          <div className="date-time-qty">
            <div className="date">date</div>
            <div className="time">time</div>
            <div className="qty">qty</div>
          </div>
          <div className="divider"></div>

          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>

          <div className="screen"></div>

          <div className="seat-grid">
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat occupied"></div>
              <div className="seat occupied"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat occupied"></div>
              <div className="seat occupied"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat occupied"></div>
              <div className="seat occupied"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat occupied"></div>
              <div className="seat occupied"></div>
              <div className="seat occupied"></div>
              <div className="seat"></div>
            </div>
          </div>

          <div className="text">
            {`You have selected 1 seats for a price of $12`}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.movieDetail.title,
    footer: state.footerBottom,
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetail,
  footerBottom,
})(PickSeat);
