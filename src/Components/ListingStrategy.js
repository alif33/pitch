import React from 'react';
import Footer from './Section/Footer';
import ListingStrategyForm from './Section/ListingStrategyForm';
import Navbar from './Section/Navbar';

const ListingStrategy = () => {
    return (
      <div>
        <Navbar />
        <ListingStrategyForm />
        <Footer />
      </div>
    );
};

export default ListingStrategy;