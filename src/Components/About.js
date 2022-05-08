import React from "react";
import AboutHeader from "./Section/AboutHeader";
import Navbar from "./Section/Navbar";
import Footer from "./Section/Footer";
import Features from "./Section/Features";
import ShowTime from "./Section/ShowTime";
import Community from "./Section/Community";

const About = () => {
  return (
    <div className="about">
      <Navbar status={"home"} />
      <AboutHeader />
      <Features />
      <ShowTime/>
      <Community/>
      <Footer /> 
    </div>
  );
};

export default About;
