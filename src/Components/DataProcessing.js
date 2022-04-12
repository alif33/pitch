import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

const DataProcessing = () => {
  const { users } = useSelector(state=>state);
  console.log(users);
  return (
    <div>
      <Navbar />
      <div className="data-processing">
        <img src="./img/animation2.gif" alt="" />
        <h2>Data Processing</h2>
        <p>Please wait...</p>
      </div>
      <Footer />
    </div>
  );
};

export default DataProcessing;
