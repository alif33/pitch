import React, { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Counter = () => {
  const [rangeValue, setRangeValue] = useState(10);
  const price = .22;

  const handleChange = (value) => {
    setRangeValue(value);
  };
  const handleUsdt = e => {
    setRangeValue(e.target.value/price) 
  }
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
            <div className="counter-card">
              <p className="couter-title mb-3">Sale is now live</p>
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
              <small className="chacker">1 Token={ price } UDTS</small>
            </div>

            <div className="couter-progass">
              <p className="text-center">Recruitment progress</p>

            <div className="slider">
              <Slider
                min={0}
                max={2000000}
                value={rangeValue}
                onChange={ e=>handleChange(e) }
              />
              <div className="main-value">
                <span>
                $2000000
                </span>
              </div>
            </div>
            </div>

            <h2 className="mt-3">Token purchase calculator</h2>
            <div className="token-purchase mt-3">
              <div className="row w-100">
                <div className="col-6">
                  <div className="amount-of-tokens">
                    <label htmlFor="">Amount of Tokens</label>
                    <input 
                      type="number" 
                      value={rangeValue}
                      onChange={ e=>setRangeValue(e.target.value) } 
                    />
                    <span></span>
                  </div>
                  <div className="amount-of-tokens mt-2 USTD">
                    <label htmlFor="">Amount of USTD</label>
                    <input
                      type="number"
                      value={ price*rangeValue }
                      onChange={ e=>handleUsdt(e) } 
                    />
                    <span></span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="balance">
                    <div className="balance-header">
                      <p>BALANCE: 0.0539535</p>
                      <img src="./img/loader-icon.svg" alt="" />
                    </div>
                    <a>1 Token={ price } USDT</a>
                    <p>
                      NETWOTK: <img src="./img/balance-icon.svg" alt="" />{" "}
                      BINANCE
                    </p>
                  </div>
                </div>
              </div>
              <button className="main-btn mt-4">swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
