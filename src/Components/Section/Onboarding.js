import React from "react";

const Onboarding = ({ status, done }) => {
  return (
    <div className="onboarding">
      <div className="onbarding-heading">
        <h3>Onboarding</h3>
        <p>Please Complete all of the following steps</p>
      </div>
      <ul className="onbarding-items">
        <li
          className={`onbarding-item ${status === "contact" && "active"} ${
            done > 1 && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "contact"
                ? "active"
                : done > 1
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Contact info</span>
        </li>
        
        <li
          className={`onbarding-item ${status === "founders" && "active"} ${
            done > 2 && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "founders"
                ? "active"
                : done > 2
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Founders info</span>
        </li>

        <li
          className={`onbarding-item ${status === "company" && "active"} ${
            done > 3 && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "company"
                ? "active"
                : done > 3
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Company info</span>
        </li>
        <li
          className={`onbarding-item ${status === "metrics" && "active"} ${
            done > 4 && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "metrics"
                ? "active"
                : done > 4
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Metrics info</span>
        </li>
        <li
          className={`onbarding-item ${status === "listingInfo" && "active"} ${
            done > 5 && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "listingInfo"
                ? "active"
                : done > 5
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Listing info</span>
        </li>
        <li
          className={`onbarding-item ${
            status === "partnersInfluencers" && "active"
          } ${done > 6 && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "partnersInfluencers"
                ? "active"
                : done > 6
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Partners & influencers</span>
        </li>
        <li
          className={`onbarding-item ${
            status === "listingStrategy" && "active"
          } ${done > 7 && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "listingStrategy"
                ? "active"
                : done > 7
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Listing Strategy</span>
        </li>
        {/* <li
          className={`onbarding-item ${
            status === "videoPitch" && "active"
          } ${done > 8 && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "videoPitch"
                ? "active"
                : done > 8
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>video pitch</span>
        </li> */}
      </ul>
    </div>
  );
};

export default Onboarding;
