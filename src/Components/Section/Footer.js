import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="footer-logo">
              <Link to="/">
                <img src="/img/footer-logo.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">company</h4>
              <li className="footer-menu-item">
                <Link to="/chaiport">about</Link>
              </li>

              <li className="footer-menu-item">
                <Link to="/">blog</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">wallet</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">merchant</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">tools</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">support</h4>
              <li className="footer-menu-item">
                <Link to="/">help</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/contact">contact us</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">create account</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">support</h4>
              <li className="footer-menu-item">
                <Link to="/">legal & privacy</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">terms & conditions</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">cookie policy</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">cookie preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
