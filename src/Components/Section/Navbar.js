import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./img/logo.svg" alt="" />
        </Link>

        <div className="navbar-div">
          <div className={navbarShow ? "navbar-menu active" : "navbar-menu"}>
            {navbarShow && (
              <button
                className="close"
                onClick={() => setNavbarShow(!navbarShow)}
              >
                <img src="./img/close.svg" alt="" />
              </button>
            )}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Submit IDO
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Launchpad
                </Link>
              </li>
              <li className="nav-item active">
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
