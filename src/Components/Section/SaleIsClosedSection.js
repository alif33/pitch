import React from "react";
import "react-rangeslider/lib/index.css";

const SaleIsClosedSection = () => {
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
              <p className="couter-title">Sale is closed</p>
              <small className="chacker">1 Token=0.002 UDTS</small>
              <div className="closed-card mt-3">
                <img src="./img/closed-card.svg" alt="" />
                <div className="total-earning">
                  <h2>total earning</h2>
                  <p>
                    $10M
                    <span>
                      <img src="./img/polygon.svg" alt="" /> 10%
                    </span>
                  </p>
                </div>
                <ul>
                  <li>
                    <p>Number of investments</p> <span>43</span>
                  </li>
                  <li>
                    <p>Total recruitment days</p> <span>3</span>
                  </li>
                  <li>
                    <p>Total amount raised</p> <span>$2M</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleIsClosedSection;
