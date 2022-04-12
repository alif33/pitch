import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({active}) => {
  const [navbarShow, setNavbarShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./img/logo.svg" alt="" />
        </Link>

        <div className="navbar-div">
          <div className={navbarShow ? "navbar-menu active" : "navbar-menu"}>
            {navbarShow && (
              <div className="mobile-show-navbar">
                
                <Link to="/">
                  <img src="./img/logo.svg" alt="" />
                </Link>

                <button
                  className="close"
                  onClick={() => setNavbarShow(!navbarShow)}
                >
                  <img src="./img/close.svg" alt="" />
                </button>
              </div>
            )}
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${active === "home" && "active"}`}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${active === "submit" && "active"}`}>
                <Link className="nav-link" to="/contact">
                  Submit IDO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Launchpad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <button className="main-btn">Connect Wallet</button>{" "}
          <button
            className="menu-btn"
            onClick={() => setNavbarShow(!navbarShow)}
          >
            <img src="./img/menu-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
