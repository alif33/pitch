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
import DataProcessing from "./Components/DataProcessing";
import Congratulations from "./Components/Congratulations ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chaiport" element={<ChainPort />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companyinfo" element={<CompanyInfo />} />
        <Route path="/metricsinfo" element={<MetricsInfo />} />
        <Route path="/listinginfo" element={<ListingInfo />} />
        <Route path="/partnersinfluencers" element={<PartnersInfluencers />} />
        <Route path="/listingstrategy" element={<ListingStrategy />} />
        <Route path="/dataprocessing" element={<DataProcessing />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
