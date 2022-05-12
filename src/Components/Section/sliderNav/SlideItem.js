import React from "react";

const SlideItem = ({ slider }) => {
  return (
    <div>
      <div className="nav-slider-item">
        <img src={slider.img} alt="" />
        <p className="nav-slider-des">{slider.des}</p>
        <div className={slider.pIcon === 'up' ? "parsent blue" : "parsent red"}>
          <img src={slider.pIcon === "up" ? "img/up.svg" : "img/down.svg"} alt="" />
          <span>{slider.parsent}</span>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
