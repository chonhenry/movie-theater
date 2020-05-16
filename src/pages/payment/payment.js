import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../../actions/index";
import "./payment.scss";

class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <div className="container">
          <div className="title">title: this.props.title</div>
          <div className="payment-detail">
            <div className="credit-card-form">
              <div>Enter you payment details</div>

              <div>Cardholder Name</div>
              <input type="text"></input>

              <div>Card Number</div>
              <input type="text"></input>

              <div>
                <div className="exp-date">Exp Month</div>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>

                <div>Exp Year</div>
                <select>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                </select>
              </div>

              <div>CVC</div>
              <input type="text"></input>
            </div>
            <div className="payment-summary">
              <div>qty: {this.props.seatsQty}</div>
              <div>seat: {this.props.selectedSeat}</div>
              <div>date: {this.props.date}</div>
              <div>time: {this.props.time}</div>
            </div>
          </div>
        </div>
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
