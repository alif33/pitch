import React from "react";

const SlideItem = ({ slider, balance }) => {
  return (
    <div>
      <div className="nav-slider-item">
        <img src={slider.image.small} alt="" />
        <p className="nav-slider-des">
          {slider.name}({slider.symbol})$
          {slider.market_data.current_price.aed.toFixed(2)}
        </p>
        <div
          className={
            slider.market_data.market_cap_change_percentage_24h >= 0
              ? "parsent blue"
              : "parsent red"
          }
        >
          <img
            src={
              slider.market_data.market_cap_change_percentage_24h >= 0
                ? "img/up.svg"
                : "img/down.svg"
            }
            alt=""
          />
          <span>
            {slider.market_data.market_cap_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
