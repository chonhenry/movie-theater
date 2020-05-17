import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchMovieDetail,
  selectSeats,
  UnselectSeats,
  clearSeats,
  SetDate,
  SetTime,
} from "../../actions/index";
import "./pick-seat.scss";

class PickSeat extends React.Component {
  componentDidMount = () => {
    this.props.fetchMovieDetail(window.location.pathname.slice(7, 13));
    this.props.clearSeats();

    // var today, dd, mm, yyyy;
    // today = new Date();
    // dd = String(today.getDate()).padStart(2, "0");
    // mm = String(today.getMonth() + 1).padStart(2, "0");
    // yyyy = today.getFullYear();
    // this.props.SetDate(`${mm}/${dd}/${yyyy}`);
    this.props.SetDate("");

    window.scrollTo(0, 0);
  };

  renderWeek = () => {
    var today, dd, mm, yyyy;
    var dateArr = [""];

    for (var i = 0; i < 7; i++) {
      today = new Date();
      today.setDate(today.getDate() + i);
      dd = String(today.getDate()).padStart(2, "0");
      mm = String(today.getMonth() + 1).padStart(2, "0");
      yyyy = today.getFullYear();
      dateArr.push(`${mm}/${dd}/${yyyy}`);
    }

    return dateArr.map((d) => {
      return <option key={d}>{d}</option>;
    });
  };

  seatOnClick = (e, seat) => {
    let className = e.target.className;

    if (className === "seat") {
      e.target.className = "seat selected";
      this.props.selectSeats(seat);
    }

    if (className === "seat selected") {
      e.target.className = "seat";
      this.props.UnselectSeats(seat);
    }
  };

  renderSeatRow = (row) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    var className;
    var seat;

    return (
      <div className="row">
        {arr.map((s) => {
          className = "seat";
          seat = `${row}${s}`;

          if (
            seat === "B4" ||
            seat === "B5" ||
            seat === "C7" ||
            seat === "C8" ||
            seat === "E4" ||
            seat === "E5" ||
            seat === "F5" ||
            seat === "F6" ||
            seat === "F7"
          ) {
            className = "seat occupied";
          }

          return (
            <div
              className={`${className}`}
              onClick={(e) => this.seatOnClick(e, `${row}${s}`)}
              key={seat}
            >
              {seat}
            </div>
          );
        })}
      </div>
    );
  };

  renderPaymentButtom = () => {
    if (
      this.props.date !== "" &&
      this.props.time !== "" &&
      this.props.seatsQty !== 0
    ) {
      return (
        <Link to="/payment" className="payment">
          Proceed To Payment
        </Link>
      );
    } else {
      return (
        <Link
          to="/payment"
          className="payment disabled"
          onClick={(event) => event.preventDefault()}
        >
          Proceed To Payment
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="pick-seat">
        <div className="container">
          <div className="title">Choose Your Seats</div>
          <div className="movie-title">{this.props.title}</div>
          <div className="date-time-qty">
            <div className="date">
              <div>Date</div>
              <select
                className="option"
                onChange={(e) => this.props.SetDate(e.target.value)}
              >
                {this.renderWeek()}
              </select>
            </div>
            <div className="time">
              <div>Time</div>
              <select
                className="option"
                onChange={(e) => this.props.SetTime(e.target.value)}
              >
                <option></option>
                <option>10:00 AM</option>
                <option>12:30 PM</option>
                <option>02:15 PM</option>
                <option>04:00 PM</option>
                <option>06:30 PM</option>
                <option>07:30 PM</option>
                <option>08:15 PM</option>
                <option>09:45 PM</option>
                <option>11:00 PM</option>
              </select>
            </div>
            <div className="ticket-price">
              <div>Ticket Price</div>
              <div className="price">$15</div>
            </div>
          </div>
          <div className="divider"></div>

          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Available</small>
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
            {this.renderSeatRow("A")}
            {this.renderSeatRow("B")}
            {this.renderSeatRow("C")}
            {this.renderSeatRow("D")}
            {this.renderSeatRow("E")}
            {this.renderSeatRow("F")}
          </div>

          <div className="summary">
            <div className="ticket-qty">
              You have selected <strong>{this.props.seatsQty}</strong> seats for
              a price of <strong>${this.props.seatsQty * 15}</strong>
            </div>
            {this.renderPaymentButtom()}
            {/* <div>{this.props.time}</div> */}
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
  selectSeats,
  UnselectSeats,
  clearSeats,
  SetDate,
  SetTime,
})(PickSeat);
