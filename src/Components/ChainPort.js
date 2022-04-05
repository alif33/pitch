import React from "react";
import Navbar from "./Section/Navbar";
import PoolAlert from "./Section/PoolAlert";
import Footer from "./Section/Footer";
import Counter from "./Section/Counter";
import Overview from "./Section/Overview";

const ChainPort = () => {
  return (
    <div className="chain-port">
      <Navbar />
      <Counter />
      <Overview />
      <PoolAlert />
      <Footer />
    </div>
  );
};

export default ChainPort;
