import React from 'react';
import Footer from './Section/Footer';
import ListingInfoForm from './Section/ListingInfoForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';

const ListingInfo = () => {
    return (
      <div className="contact form-background">
        <Navbar status={"submit"} />
        <div className="form-site-divide">
        <Onboarding status="listingInfo" done={5} />
        <ListingInfoForm />
      </div>
        <Footer />
      </div>
    );
};

export default ListingInfo;