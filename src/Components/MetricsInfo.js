import React from 'react';
import Footer from './Section/Footer';
import MetricsInfoForm from './Section/MetricsInfoForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';

const MetricsInfo = () => {
    return (
      <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
        <Onboarding status="metrics" done={4} />
        <MetricsInfoForm />
      </div>
        <Footer />
      </div>
    );
};

export default MetricsInfo;