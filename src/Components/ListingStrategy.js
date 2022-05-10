import React, { useState } from 'react';
import Footer from './Section/Footer';
import ListingStrategyForm from './Section/ListingStrategyForm';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';
import DataProcessing from "./DataProcessing";

const ListingStrategy = () => {
  const [dataProcessing, setDataProcessing] = useState(false);
    return (
      <div>
        <Navbar status={"submit"} />
        {
            dataProcessing ? 
              <>
                <DataProcessing />
              </>
              : <>
              <div className="form-site-divide">
              <Onboarding status="listingStrategy" done={7} />
              <ListingStrategyForm setDataProcessing={setDataProcessing} />
            </div>
              </>
          }
        
        <Footer />
      </div>
    );
};

export default ListingStrategy;