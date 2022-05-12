import React from "react";
import Slider from "react-slick";
import SlideItem from "./SlideItem";

const SliderNav = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderData = [
    {
      img: "img/btc.svg",
      des: "Bitcoine(BTC)$0.073096",
      parsent: "-0.86%",
      pIcon: "down",
    },
    {
      img: "img/eth.svg",
      des: "Ethereum (ETH)$0.073096",
      parsent: "0.86%",
      pIcon: "up",
    },
    {
      img: "img/usdt.svg",
      des: "Tether(USDT)$0.073096",
      parsent: "0.86%",
      pIcon: "up",
    },
    {
      img: "img/usdc.svg",
      des: "USD Coin(USDC)$0.073096",
      parsent: "0.86%",
      pIcon: "down",
    },
    {
      img: "img/btc.svg",
      des: "Bitcoine(BTC)$0.073096",
      parsent: "-0.86%",
      pIcon: "down",
    },
    {
      img: "img/eth.svg",
      des: "Ethereum (ETH)$0.073096",
      parsent: "0.86%",
      pIcon: "up",
    },
    {
      img: "img/usdt.svg",
      des: "Tether(USDT)$0.073096",
      parsent: "0.86%",
      pIcon: "up",
    },
    {
      img: "img/usdc.svg",
      des: "USD Coin(USDC)$0.073096",
      parsent: "0.86%",
      pIcon: "down",
    },
  ];
  return (
    <div className="slider-nav">
      <div className="navbar-slider container-fluid">
        <div className="w-100">
          <Slider {...settings}>
            {sliderData.map((slider, i) => (
              <SlideItem slider={slider} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderNav;
