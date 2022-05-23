import React from "react";
import AboutHeader from "./Section/AboutHeader";
import Navbar from "./Section/Navbar";
import Footer from "./Section/Footer";
import Features from "./Section/Features";
import ShowTime from "./Section/ShowTime";
import Community from "./Section/Community";
import Follow from "./Section/Follow";

const About = () => {
  return (
    <div className="about">
      <Navbar status={"about"} />
      <AboutHeader />
      <Features />
      <ShowTime />
      <Community />
      <Follow />
      <Footer />
    </div>
  );
};

export default About;
