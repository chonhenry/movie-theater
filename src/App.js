import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./pages/homepage/homepage";
import MovieDetail from "./pages/movie-detail/movie-detail";
import MovieShowtime from "./pages/movie-showtime/movie-showtime";
import Payment from "./pages/payment/payment";
import PickSeat from "./pages/pick-seat/pick-seat";
import TheaterLocation from "./pages/theater-location/theater-location";
import TheaterShowtime from "./pages/theater-showtime/theater-showtime";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App ui">
        <BrowserRouter>
          <div>
            <Navbar></Navbar>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/movie:id" exact component={MovieDetail}></Route>
            <Route
              path="/showtime/movie:id"
              exact
              component={MovieShowtime}
            ></Route>
            <Route path="/payment" exact component={Payment}></Route>
            <Route path="/seat" exact component={PickSeat}></Route>
            <Route path="/location" exact component={TheaterLocation}></Route>
            {/* <Route path="/search" exact component={Search}></Route> */}
            <Route
              path="/theatershowtime"
              exact
              component={TheaterShowtime}
            ></Route>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
