import React from "react";
import "./side-menu.scss";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  let sideMenuClasses = "side-menu";
  if (props.show) {
    sideMenuClasses = "side-menu open";
  }

  return (
    <nav className={sideMenuClasses}>
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
            SIGNIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
