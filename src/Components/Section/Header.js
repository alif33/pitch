import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SubscribeModal from "./allModal/SubscribeModal";

const Header = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="header-leftside">
              <div className="header-title">
                <h2>
                  <img src="/img/flag.svg" alt="" />A CrowdFunding Platform
                  Driven By Its Community
                </h2>
                <p className="sub-Title">
                  PitchShow helps and facilitates the connection between
                  Founders and Investor. To rise funds through a pre-listed
                  token. <Link to="/">Learn More</Link>
                </p>
              </div>
              <div className="header-search">
                <input
                  type="email"
                  placeholder="Join the Community with your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {email.match(
                  /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) ? (
                  <SubscribeModal email={email} setEmail={setEmail} btnName={"Get Started"} />
                ) : (
                  <button
                    className="header-search-btn"
                    onClick={() => toast.error("Please enter your email")}
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="header-rightside">
              <img src="/img/header-img.svg" alt="" />
              <img src="/img/header-img1.svg" alt="" />

              <span>
                <img src="/img/frame.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
