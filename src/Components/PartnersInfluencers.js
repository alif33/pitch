import React from 'react';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';
import PartnersInfluencersForm from './Section/PartnersInfluencersForm';

const PartnersInfluencers = () => {
    return (
      <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
        <Onboarding status="partnersInfluencers" done={6} />
        <PartnersInfluencersForm />
      </div>
        <Footer />
      </div>
    );
};

export default PartnersInfluencers;