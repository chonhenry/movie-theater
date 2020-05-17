import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../../actions/index";
import "./payment.scss";

// ae 34, 37
// mc 51, 52, 53, 54, 55
// visa 4
// dis 6

class Payment extends React.Component {
  state = { type: "" };

  onCreditCardNumChange = (e) => {
    if (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") {
      e.target.value = e.target.value;
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }

    if (e.target.value.slice(0, 1) === "4") {
      this.setState({ type: "visa" });
    } else if (e.target.value.slice(0, 1) === "6") {
      this.setState({ type: "discover" });
    } else if (
      e.target.value.slice(0, 2) === "51" ||
      e.target.value.slice(0, 2) === "52" ||
      e.target.value.slice(0, 2) === "53" ||
      e.target.value.slice(0, 2) === "54" ||
      e.target.value.slice(0, 2) === "55"
    ) {
      this.setState({ type: "master" });
    } else if (
      e.target.value.slice(0, 2) === "34" ||
      e.target.value.slice(0, 2) === "37"
    ) {
      this.setState({ type: "amex" });
    } else {
      this.setState({ type: "" });
    }
  };

  showType = () => {
    return (
      <div className="cc-type-container">
        <i
          className={`cc-type fab fa-cc-visa fa-3x ${
            this.state.type === "visa" ? "selected" : ""
          }`}
        ></i>
        <i
          className={`cc-type fab fa-cc-mastercard fa-3x ${
            this.state.type === "master" ? "selected" : ""
          }`}
        ></i>
        <i
          className={`cc-type fab fa-cc-amex fa-3x ${
            this.state.type === "amex" ? "selected" : ""
          }`}
        ></i>
        <i
          className={`cc-type fab fa-cc-discover fa-3x ${
            this.state.type === "discover" ? "selected" : ""
          }`}
        ></i>
      </div>
    );
  };

  render() {
    return (
      <div className="payment">
        <div className="container">
          <div className="title">{this.props.title}</div>
          <div className="payment-detail">
            <div className="credit-card-form">
              <div className="payment-label">Enter you payment details</div>
              {this.showType()}
              <div className="label">Cardholder Name</div>
              <input type="text" className="cardholder-name"></input>
              <div className="label">Card Number</div>
              <input
                type="text"
                onChange={(e) => this.onCreditCardNumChange(e)}
                className="card-number"
                maxLength={this.state.type === "amex" ? 15 : 16}
              ></input>
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
              <input
                type="text"
                className="cvc"
                maxLength={this.state.type === "amex" ? 4 : 3}
              ></input>
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
    selectedSeat: state.seatsInfo.selectedSeat.sort(),
    date: state.date,
    time: state.time,
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetail,
})(Payment);
