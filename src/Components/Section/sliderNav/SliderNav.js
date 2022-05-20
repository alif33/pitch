import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import CoinGecko from "coingecko-api";

const SliderNav = () => {
  const [balance, setBalance] = useState([]);
  //2. Initiate the CoinGecko API Client
  const CoinGeckoClient = new CoinGecko();


  //3. Make calls
  var func = async () => {
    // let data = await CoinGeckoClient.coins.markets();
    // let data =  CoinGeckoClient.coins.fetch('bitcoin');
    // let data = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
    //   date: '16-5-2022',
    // });
    // let data = await CoinGeckoClient.exchangeRates.all();
    // let data = await CoinGeckoClient.statusUpdates();
    // let data = await CoinGeckoClient.coins.markets({
    //   ids: ["bitcoin", "ethereum","tether","usd"],
    //   vs_currencies: ["eur", "usd", "usdt", "usdc"],
    // });
    let data = await CoinGeckoClient.coins.all();
    console.log(data);
    setBalance(data.data);
  };

  useEffect(() => {
    func();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-nav">
      <div className="navbar-slider container-fluid">
        <div className="w-100">
          <Slider {...settings}>
            {balance.map((slider, i) => (
              <SlideItem slider={slider} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderNav;
