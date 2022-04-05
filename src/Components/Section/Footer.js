import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <Link to="/">
                <img src="./img/footer-logo.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">COMPANY</h4>
              <li className="footer-menu-item">
                <Link to="/chaiport">ABOUT</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">BLOG</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">WALLET</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">MeRCHANT</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">TOOLS</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">SUPPORT</h4>
              <li className="footer-menu-item">
                <Link to="/">HELP</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/contact">CONTACT US</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">CREATE ACCOUNT</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">SUPPORT</h4>
              <li className="footer-menu-item">
                <Link to="/">LEGAL & PRIVACY</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">TERMS & CONDITIONS</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">COOKIE POLICY</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">COOKIE PREFERENCES</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
