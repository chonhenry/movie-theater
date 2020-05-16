import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../../actions/index";
import "./payment.scss";

class Payment extends React.Component {
  render() {
    return (
      <div>
        <div>title: {this.props.title}</div>
        <div>qty: {this.props.seatsQty}</div>
        <div>seat: {this.props.selectedSeat}</div>
        <div>date: {this.props.date}</div>
        <div>time: {this.props.time}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.movieDetail.title,
    seatsQty: state.seatsInfo.seats_qty,
    selectedSeat: state.seatsInfo.selectedSeat,
    date: state.date,
    time: state.time,
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetail,
})(Payment);
