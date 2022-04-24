import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

const Congratulations = () => {
  return (
    <div>
      <Navbar />
      <div className="congratulatjions">
      <img src="/img/flag.svg" alt="" />
        <h2> Congratulations </h2>
        <h5> The registration was completed successfully</h5>
        <p>
          Our team will check your data and confirm your registration within 24
          hours
        </p>
      <button className="main-btn"><Link to="/">Go to Homepage</Link></button>
      </div>
      <Footer />
    </div>
  );
};

export default Congratulations;
