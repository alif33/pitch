import React from 'react';
import SubscribeModal from './allModal/SubscribeModal';

const PoolAlert = () => {
    return (
      <div className="pool-alert">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center     align-items-start   ">
              <h1>Pool Alert</h1>
              <p>
                Subscribe to be the first to know the new pools and relevant events.
              </p>
              <SubscribeModal btnName={"Subscribe"}/>
            </div>
            <div className="col-md-6">
              <div className="pool-alert-right">
                <img src="/img/Group_227.svg" alt="" className='img1'/>
                <img className='img2' src="/img/Group.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PoolAlert;