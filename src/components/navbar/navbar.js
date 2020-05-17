import React from "react";
import { connect } from "react-redux";
import { toogleBackdrop } from "../../actions/index";
import "./navbar.scss";
// import ToggleButton from "../toggle-button/toggle-button";
// import Backdrop from "../backdrop/backdrop";
// import SearchBox from "../searchBox/searchBox";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  // state = { backdrop: false };

  // backdropToggle = (prevState) => {
  //   this.setState({ backdrop: !prevState });
  // };

  render() {
    return (
      <header className="navbar">
        <nav className="navbar-navigation container">
          {/* <div className="toogle-btn">
            <ToggleButton click={props.toggleClickHandler} />
          </div> */}
          <div className="navbar-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="logo"></img>
            </Link>
          </div>
          <div className="spacer"></div>
          <div className="navbar-items">
            <ul>
              {/* <li>
                <Link to="/" className="link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/location" className="link">
                  THEATERS
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  SIGNIN
                </Link>
              </li> */}
              <li onClick={() => this.props.toogleBackdrop()}>
                <div className="search-logo">
                  <i className="fas fa-search fa-2x"></i>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backdrop: state.toggleBackdrop,
  };
};

export default connect(mapStateToProps, { toogleBackdrop })(Navbar);

// const Navbar = () => {
//   return (
//     <nav className="nav-wrapper">
//       <div className="container">
//         <ul id="nav-mobile" className="">
//           <li>
//             <Link to="/" className="logo brand-logo">
//               <img src={logo} alt="logo"></img>
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="link">
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link to="/location" className="link">
//               THEATERS
//             </Link>
//           </li>
//           <li>
//             <Link to="/location" className="link">
//               SEARCH
//             </Link>
//           </li>
//         </ul>

//         <div class="right">
//           <Link to="/location" className="link">
//             PROFILE
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };
