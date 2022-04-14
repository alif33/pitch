import React from 'react';
import Footer from './Section/Footer';
import ListingInfoForm from './Section/ListingInfoForm';
import Navbar from './Section/Navbar';

const ListingInfo = () => {
    return (
      <div>
        <Navbar active={"submit"} />
        <ListingInfoForm />
        <Footer />
      </div>
    );
};

export default ListingInfo;