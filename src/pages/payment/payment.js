import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../../actions/index";
import "./payment.scss";

class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <div className="container">
          <div className="title">{this.props.title}</div>
          <div className="payment-detail">
            <div className="credit-card-form">
              <div className="payment-label">Enter you payment details</div>

              <div className="label">Cardholder Name</div>
              <input type="text" className="cardholder-name"></input>

              <div className="label">Card Number</div>
              <input type="text" className="card-number"></input>

              <div className="expiration">
                <div className="exp-month-container">
                  <div className="exp-month">Exp Month</div>
                  <select>
                    <option></option>
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
                </div>

                <div className="exp-year-container">
                  <div className="exp-year">Exp Year</div>
                  <select>
                    <option></option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  </select>
                </div>
              </div>

              <div className="label">CVC</div>
              <input type="text" className="cvc"></input>
            </div>

            <div className="payment-summary">
              <div className="sumarry-label">Summary</div>
              <div className="summary-date">
                Date: <strong>{this.props.date}</strong>
              </div>
              <div className="summary-time">
                Time: <strong>{this.props.time}</strong>
              </div>
              <div className="summary-qty">
                Ticket Qty: <strong>{this.props.seatsQty}</strong>
              </div>
              <div className="summary-seats">
                Seats: <strong>{this.props.selectedSeat.join(", ")}</strong>
              </div>
              <div className="line"></div>
              <div className="summary-total">
                Total: <strong>${this.props.seatsQty * 15}</strong>
              </div>
              <div className="purchase-button">Purchase</div>
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
