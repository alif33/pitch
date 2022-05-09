import React, { useState } from "react";
import toast from "react-hot-toast";
import SubscribeModal from "./allModal/SubscribeModal";

const Community = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="community">
      <div
        className="community-bg"
        style={{ backgroundImage: `url('img/desktop-1920.svg')` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-lg-center text-left">
            <h3>Join the Community </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="row">
              <div className="col-sm-5">
                <h5>Founders get:</h5>
                <ul>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>Saleability</p>
                  </li>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>Product massification</p>
                  </li>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>Community Supported Start</p>
                  </li>
                </ul>{" "}
              </div>
              <div className="col-1 mt-5 mt-sm-0"></div>
              <div className="col-sm-6 ">
                <h5>Investor get:</h5>
                <ul>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>Quality new tokens</p>
                  </li>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>Safe and trustworthy investments</p>
                  </li>
                  <li>
                    <img src="img/victor.svg" alt="" />
                    <p>In-depth product knowledge</p>
                  </li>
                </ul>{" "}
              </div>
              <div className="header-search about-header-search">
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
                  <SubscribeModal
                    email={email}
                    setEmail={setEmail}
                    btnName={"Get Started"}
                  />
                ) : (
                  <button
                    className="header-search-btn"
                    onClick={() => toast.error("Please enter your email")}
                  >
                    Start Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
