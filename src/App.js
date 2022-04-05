import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "./sass/main.scss";
import Home from "./Components/Home";
import ChainPort from "./Components/ChainPort";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chaiport" element={<ChainPort/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
