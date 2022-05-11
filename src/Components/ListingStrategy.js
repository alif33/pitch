import React from 'react';
import Footer from './Section/Footer';
import ListingStrategyForm from './Section/ListingStrategyForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';

const ListingStrategy = () => {

    return (
      <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
              <Onboarding status="listingStrategy" done={7} />
              <ListingStrategyForm />
            </div>
        
        <Footer />
      </div>
    );
};

export default ListingStrategy;