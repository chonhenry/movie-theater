import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item logo">
        <img src={logo} alt="logo"></img>
      </Link>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/location" className="item">
        Theaters
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
