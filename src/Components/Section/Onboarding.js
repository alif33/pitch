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
            done === "contact" && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "contact"
                ? "active"
                : done === "contact"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Contact info</span>
        </li>
        <li
          className={`onbarding-item ${status === "founders" && "active"} ${
            done === "founders" && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "founders"
                ? "active"
                : done === "founders"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Founders info</span>
        </li>
        <li
          className={`onbarding-item ${status === "company" && "active"} ${
            done === "company" && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "company"
                ? "active"
                : done === "company"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Company info</span>
        </li>
        <li
          className={`onbarding-item ${status === "metrics" && "active"} ${
            done === "metrics" && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "metrics"
                ? "active"
                : done === "metrics"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Metrics info</span>
        </li>
        <li
          className={`onbarding-item ${status === "listingInfo" && "active"} ${
            done === "listingInfo" && "done"
          }`}
        >
          <img
            src={`img/onboarding-${
              status === "listingInfo"
                ? "active"
                : done === "listingInfo"
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
          } ${done === "partnersInfluencers" && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "partnersInfluencers"
                ? "active"
                : done === "partnersInfluencers"
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
          } ${done === "listingStrategy" && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "listingStrategy"
                ? "active"
                : done === "listingStrategy"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>Listing Strategy</span>
        </li>
        <li
          className={`onbarding-item ${
            status === "videoPitch" && "active"
          } ${done === "videoPitch" && "done"}`}
        >
          <img
            src={`img/onboarding-${
              status === "videoPitch"
                ? "active"
                : done === "videoPitch"
                ? "okay"
                : "wait"
            }.svg`}
            alt=""
          />
          <span>video pitch</span>
        </li>
      </ul>
    </div>
  );
};

export default Onboarding;
