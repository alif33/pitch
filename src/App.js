import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "./sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home";
import ChainPort from "./Components/ChainPort";
import Contact from "./Components/Contact";
import Modal from "./Components/Section/Modal";
import CompanyInfo from "./Components/CompanyInfo";
import MetricsInfo from "./Components/MetricsInfo";
import ListingInfo from "./Components/ListingInfo";
import PartnersInfluencers from "./Components/PartnersInfluencers";
import ListingStrategy from "./Components/ListingStrategy";
import Congratulations from "./Components/Congratulations ";
import { useSelector } from "react-redux";

const App = () => {
  
  const {users} = useSelector(state=>state);

  console.log(users);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chaiport" element={<ChainPort />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/metrics-info" element={<MetricsInfo />} />
        <Route path="/listing-info" element={<ListingInfo />} />
        <Route path="/partnersin-fluencers" element={<PartnersInfluencers />} />
        <Route path="/listing-strategy" element={<ListingStrategy />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
