import React from 'react';

const Header = () => {
    return (
      <div className="header d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="header-leftside">
                <div className="header-title">
                  <h2><img src="./img/flag.svg" alt="" />A CrowdFunding Platform Driven By Its Community</h2>
                </div>
                <div className="header-search">
                  <input type="text" placeholder="Join the Community with your Email" />
                  <button className="header-search-btn">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="header-rightside">
                <img src="./img/header-img.svg" alt="" />
                <img src="./img/header-img1.svg" alt="" />
                 
                <span>
                  <img src="./img/frame.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;