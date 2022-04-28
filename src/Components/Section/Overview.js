import React from 'react';

const Overview = () => {
    return (
      <div className="overview">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="overview-leftside">
                <h4>Project Overview</h4>
                <p>
                  ChainPort is a next-gen blockchain bridge that provides
                  custodian-level security with real interoperability, allowing
                  instant hops across chains at a click. ChainPort has been live
                  since July and already grew to port more then 80 tokens with
                  $470M TVL and average daily volume of $5M, with a current 30%
                  monthly growth. It has positioned itself as one of the top 5
                  biggest bridges in the space, and #84 by TVL between all dapps
                  and DeFi’s in the world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0">
              <div className="pool-details">
                <h5>Pool Details</h5>
                <h4>Pool Information</h4>
                <ul>
                  <li>
                    <p>Access Type</p>
                    <p>Whitelist Winners</p>
                  </li>
                  <li>
                    <p>Token Distribution</p>
                    <p >50% at TGE, 60 days cliff then 5% monthly</p>
                  </li>
                  <li>
                    <p>Token Price</p>
                    <p>$0.12</p>
                  </li>
                  <li>
                    <p>TGE Market Cap</p>
                    <p>$5.52M</p>
                  </li>
                  <li>
                    <p>Fully Market Cap</p>
                    <p>$120,000,000</p>
                  </li>
                </ul>
                <h4>Token Information</h4>
                <ul>
                  <li>
                    <p>TGE Market Cap</p>
                    <p>$5.52M</p>
                  </li>
                  <li>
                    <p>Fully Market Cap</p>
                    <p>$120,000,000</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Overview;