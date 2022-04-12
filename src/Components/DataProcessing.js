import React from "react";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

const DataProcessing = () => {
  return (
    <div>
      <Navbar />
      <div className="data-processing">
        <h2>Data Processing</h2>
        <p>Please wait...</p>
      </div>
      <Footer />
    </div>
  );
};

export default DataProcessing;
