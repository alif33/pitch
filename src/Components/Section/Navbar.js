import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../utils/connectors";
import { NetworkHandler } from "../../helpers/NetworkHandler";
import toast from "react-hot-toast";

const Navbar = ({ status }) => {
  const [navbarShow, setNavbarShow] = useState(false);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const walletConnect = async()=>{
    try {
      const { status, message } = await NetworkHandler();
      if(status){
        await activate(injected)
      }else{
        toast.error(`${message}`)
      }
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img src="/img/logo.svg" alt="" />
          <img src="/img/logo2.svg" alt="" />
        </Link>

        <div className="navbar-div">
          <div className={navbarShow ? "navbar-menu active" : "navbar-menu"}>
            {navbarShow && (
              <div className="mobile-show-navbar">
                
                <Link to="/">
                  <img src="/img/logo.svg" alt="" />
                </Link>

                <button
                  className="close"
                  onClick={() => setNavbarShow(!navbarShow)}
                >
                  <img src="/img/close.svg" alt="" />
                </button>
              </div>
            )}
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${status === "home" && "active"}`}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${status === "submit" && "active"}`}>
                <Link className="nav-link" to="/contact">
                  Submit IDO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Launchpad
                </Link>
              </li>
              <li className={`nav-item ${status === "account" && "active"}`}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className={`nav-item ${status === "account" && "active"}`}>
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
            </ul>
          </div>
          {active ? <button
            onClick={ ()=>deactivate() } 
            className="main-btn">Disconnect { account.substring(0,6) }... { account.substring(account.length-4, account.length) }</button>: <button
            onClick={walletConnect} 
            className="main-btn">Connect Wallet</button>}
          
          <button
            className="menu-btn"
            onClick={() => setNavbarShow(!navbarShow)}
          >
            <img src="/img/menu-icon.svg" alt="" />
            <img src="/img/menu-icon2.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
