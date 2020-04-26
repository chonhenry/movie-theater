import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul id="nav-mobile" className="">
          <li>
            <Link to="/" className="logo brand-logo">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
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
        </ul>

        <div class="right">
          <Link to="/location" className="link">
            PROFILE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// https://materializecss.com/navbar.html
