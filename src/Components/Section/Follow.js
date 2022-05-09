import React from "react";
import { Link } from "react-router-dom";

const Follow = () => {
  return (
    <div className="follow-us">
      <h2>Follow PitchShow and don't miss any news!</h2>
      <div className="follow-icons">
          <Link to="/"><img src="img/fb-icon.svg" alt="" /></Link>
          <Link to="/"><img src="img/tw-icon.svg" alt="" /></Link>
          <Link to="/"><img src="img/in-icon.svg" alt="" /></Link>
          <Link to="/"><img src="img/ga-icon.svg" alt="" /></Link>
          <Link to="/"><img src="img/Lin-icon.svg" alt="" /></Link>
      </div>
    </div>
  );
};

export default Follow;
