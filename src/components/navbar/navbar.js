import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar ui menu">
      <Link to="/" className="logo">
        <img src={logo} alt="logo"></img>
      </Link>
      <Link to="/" className="link">
        HOME
      </Link>
      <Link to="/location" className="link">
        THEATERS
      </Link>
      <Link to="/location" className="link">
        SEARCH
      </Link>
    </div>
  );
};

export default Navbar;
