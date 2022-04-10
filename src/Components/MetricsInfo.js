import React from 'react';
import Footer from './Section/Footer';
import MetricsInfoForm from './Section/MetricsInfoForm';
import Navbar from './Section/Navbar';

const MetricsInfo = () => {
    return (
      <div>
        <Navbar />
        <MetricsInfoForm />
        <Footer />
      </div>
    );
};

export default MetricsInfo;