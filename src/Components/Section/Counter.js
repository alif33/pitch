import React from "react";

const Counter = () => {
  return (
    <div className="counter-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="counter-section-leftside">
              <img src="./img/chainport.svg" alt="" />
              <h2 className="main-title">Chainport</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
              <button className="main-btn">Join Whitelist</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="counter-card">
              <p className="couter-title">Sale start in</p>
              <div className="count-items">
                <div className="count-item">
                  <h4>03</h4>
                  <span>Day</span>
                </div>
                <div className="count-item">
                  <h4>03</h4>
                  <span>Hours</span>
                </div>
                <div className="count-item">
                  <h4>03</h4>
                  <span>Minutes</span>
                </div>
                <div className="count-item">
                  <h4>03</h4>
                  <span>Seconds</span>
                </div>
              </div>
              <small className="chacker">1BNB=TBA</small>
              <button className="main-btn">Switch Network</button>
            </div>
            <div className="couter-progass">
              <h3>Progress</h3>
              <div className="new-item-progass">
                <div
                  className="progass-complate"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
