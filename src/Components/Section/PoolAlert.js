import React from 'react';

const PoolAlert = () => {
    return (
      <div className="pool-alert">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center     align-items-start   ">
              <h1>Pool Alert</h1>
              <p>
                Subscribe and be the first to know about new pools and relevant
                events.
              </p>
              <button className="main-btn">SUBSCRIBE</button>
            </div>
            <div className="col-md-6">
              <div className="pool-alert-right">
                <img src="./img/poolalert.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PoolAlert;