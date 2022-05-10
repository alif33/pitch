import React, { useState } from 'react';
import Footer from './Section/Footer';
import FoundersInfoForm from './Section/FoundersInfoForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';

const FoundersInfo = () => {
    const [founderForm, setFounderForm] = useState(1)
    return (
        <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
          <Onboarding status="founders" done={2} />
          <FoundersInfoForm founderForm={founderForm} setFounderForm={setFounderForm} />
        </div>
        <Footer />
      </div>
    );
};

export default FoundersInfo;