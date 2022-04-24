import React from "react";
import { useSelector } from "react-redux";

const DataProcessing = () => {
  const { users } = useSelector(state=>state);
  console.log(users);
  return (
    <div>
      <div className="data-processing">
        <img src="/img/animation2.gif" alt="" />
        <h2>Data Processing</h2>
        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default DataProcessing;
