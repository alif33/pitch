import React from 'react';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import Overview from './Section/Overview';
import PoolAlert from './Section/PoolAlert';
import SaleIsClosedSection from './Section/SaleIsClosedSection';

const SaleIsClosed = () => {
    return (
        <div className="chain-port">
        <Navbar />
        <SaleIsClosedSection />
        <Overview />
        <PoolAlert />
        <Footer />
      </div>
    );
};

export default SaleIsClosed;