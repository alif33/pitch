import React from 'react';
import AccountTap from './Section/AccountTap';
import Community from './Section/Community';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';

const Account = () => {
    return (
      <div className="acoount">
          <Navbar status={"account"}/>
          <AccountTap />
          <Community />
          <Footer />
      </div>
    );
};

export default Account;