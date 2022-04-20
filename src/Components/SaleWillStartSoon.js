import React from 'react';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import Overview from './Section/Overview';
import PoolAlert from './Section/PoolAlert';
import SaleWillStartSoonSection from './Section/SaleWillStartSoonSection';

const SaleWillStartSoon = () => {
    return (
        <div className="chain-port">
        <Navbar />
        <SaleWillStartSoonSection />
        <Overview />
        <PoolAlert />
        <Footer />
      </div>
    );
};

export default SaleWillStartSoon;