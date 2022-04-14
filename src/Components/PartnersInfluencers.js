import React from 'react';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import PartnersInfluencersForm from './Section/PartnersInfluencersForm';

const PartnersInfluencers = () => {
    return (
      <div>
        <Navbar status={"submit"} />
        <PartnersInfluencersForm />
        <Footer />
      </div>
    );
};

export default PartnersInfluencers;