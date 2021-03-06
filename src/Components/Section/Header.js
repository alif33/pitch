import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SubscribeModal from "./allModal/SubscribeModal";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div
              className="header-leftside"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-back"
            >
              <div className="header-title">
                <h2>
                  <img src="/img/flag.svg" alt="" />A CrowdFunding Platform
                  Driven By Its Community
                </h2>
                <p className="sub-Title">
                  PitchShow helps and facilitates the connection between
                  Founders and Investor. To rise funds through a pre-listed
                  token. <Link to="/about">Learn More</Link>
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
          <div className="col-lg-6 col-md-12">
            <div className="header-rightside">
              <div className="header-img header-img1">
                <div
                  className="bg-header-img bg-header-img1"
                  style={{ backgroundImage: `url('img/header-img1.png')` }}
                ></div>
              </div>
              <div className="header-img header-img2">
                <div
                  className="bg-header-img bg-header-img2"
                  style={{ backgroundImage: `url('img/header-img2.png')` }}
                ></div>
              </div>
              <div className="header-img header-img3">
                <div
                  className="bg-header-img bg-header-img3"
                  style={{ backgroundImage: `url('img/header-img3.png')` }}
                ></div>
              </div>
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
