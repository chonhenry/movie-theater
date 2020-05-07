import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import SideMenu from "./components/side-menu/side-menu";
import Backdrop from "./components/backdrop/backdrop";
import Homepage from "./pages/homepage/homepage";
import MovieDetail from "./pages/movie-detail/movie-detail";
import MovieShowtime from "./pages/movie-showtime/movie-showtime";
import Payment from "./pages/payment/payment";
import PickSeat from "./pages/pick-seat/pick-seat";
import TheaterLocation from "./pages/theater-location/theater-location";
import TheaterShowtime from "./pages/theater-showtime/theater-showtime";
import "./App.css";

class App extends Component {
  api_key = "c3cea5dfe524b09cb4548284a077e8f0";

  state = {
    sideMenuOpen: false,
    // upcomingMovie: [],
  };

  componentDidMount() {
    // fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}&language=en-US&page=1`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ upcomingMovie: data.results }, () =>
    //       console.log(this.state.upcomingMovie)
    //     );
    //   });
  }

  toggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideMenuOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>;
    }

    return (
      <div className="App ui">
        <BrowserRouter>
          <Navbar toggleClickHandler={this.toggleClickHandler}></Navbar>
          <SideMenu show={this.state.sideMenuOpen}></SideMenu>
          {backdrop}
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
