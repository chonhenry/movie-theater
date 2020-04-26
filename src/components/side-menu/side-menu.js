import React, { Component } from "react";
import "./side-menu.scss";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  return (
    <nav className="side-menu">
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
    </nav>
  );
};

export default SideMenu;
