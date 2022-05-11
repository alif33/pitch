import React, { useState } from 'react';
import DataProcessing from './DataProcessing';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';
import Onboarding from './Section/Onboarding';
import VideoPitchForm from './Section/VideoPitchForm';

const VideoPitch = () => {
    const [dataProcessing, setDataProcessing] = useState(false);
    return (
        <div className="contact form-background">
        <Navbar status={"submit"} />
        {
            dataProcessing ? 
              <>
                <DataProcessing />
              </>
              : <>
              <div className="form-site-divide">
              <Onboarding status="videoPitch" done={8} />
              <VideoPitchForm setDataProcessing={setDataProcessing} />
            </div>
              </>
          }
        
        <Footer />
      </div>
    );
};

export default VideoPitch;