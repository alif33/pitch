import React from 'react';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import Overview from './Section/Overview';
import PoolAlert from './Section/PoolAlert';
import SaleWillStartSection from './Section/SaleWillStartSection';

const SaleWillStart = () => {
    return (
        <div className="chain-port">
        <Navbar />
        <SaleWillStartSection />
        <Overview />
        <PoolAlert />
        <Footer />
      </div>
    );
};

export default SaleWillStart;