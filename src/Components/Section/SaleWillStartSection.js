import React, { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const SaleWillStartSection = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleChange = (value) => {
    setRangeValue(value);
  };
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
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="counter-card token-purchase">
              <p className="couter-title mb-3">Sale will start in</p>
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
              <small className="chacker">1 Token=0.002 UDTS</small>
              <div className="couter-progass w-75">
                <p className="text-center">Recruitment progress</p>

                <div className="slider w-100">
                  <Slider
                    min={0}
                    max={2000000}
                    value={rangeValue}
                    onChange={handleChange}
                  />
                  <div className="main-value">
                    <span>$2000000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
            <button className="main-btn2">Join Whitelist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleWillStartSection;
