import React, { Component } from "react";
import "./navbar.scss";
import ToggleButton from "../toggle-button/toggle-button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navbar-navigation container">
        <div className="toogle-btn">
          <ToggleButton click={props.toggleClickHandler} />
        </div>
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="spacer"></div>
        <div className="navbar-items">
          <ul>
            <li>
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
              <Link to="/location" className="link">
                SEARCH
              </Link>
            </li>
            <li>
              <Link to="/location" className="link">
                Signin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// https://materializecss.com/navbar.html

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
