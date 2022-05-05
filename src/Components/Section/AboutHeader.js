import React, { useState } from "react";
import toast from "react-hot-toast";
import SubscribeModal from "./allModal/SubscribeModal";

const AboutHeader = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="header d-flex justify-content-center align-items-center about-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="header-leftside about-header-leftside">
              <div className="header-title about-title">
                <h2>PitchShow Community.</h2>
                <h4 className="sub-Title about-sub-Title">
                  PitchShow Community. Fundraising & Launching Projects
                </h4>
                <p className="sub-Title about-sub-Title mt-3">
                  We connect innovative ideas with trusted investors to create a
                  safe community where everyone wins.
                </p>
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
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="about-header-rightside text-lg-center text-end">
              <img src="/img/about-header-left.svg" alt="" className="m-lg-auto ms-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
