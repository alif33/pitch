import React, { useState } from 'react';
import Footer from './Section/Footer';
import FoundersInfoForm from './Section/FoundersInfoForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';

const FoundersInfo = () => {
    return (
        <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
          <Onboarding status="founders" done={2} />
          <FoundersInfoForm  />
        </div>
        <Footer />
      </div>
    );
};

export default FoundersInfo;