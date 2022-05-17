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
                <Link to="/chaiport">Submit IDO</Link>
              </li>

              <li className="footer-menu-item">
                <Link to="/">Launchpad</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">About</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">Account</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">support</h4>
              <li className="footer-menu-item">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/contact">Legal & Privacy</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">Cookie Polity</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4">
            <ul className="footer-menu">
              <h4 className="footer-menu-title">Social Networks</h4>
              <li className="footer-menu-item">
                <Link to="/">telegram</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">twitter</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/">Discord</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
