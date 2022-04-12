import React from 'react';
import CompanyInfoForm from './Section/CompanyInfoForm';
import Footer from './Section/Footer';
import Navbar from './Section/Navbar';

const CompanyInfo = () => {
    return (
      <div>
        <Navbar active={"submit"} />
        <CompanyInfoForm />
        <Footer />
      </div>
    );
};

export default CompanyInfo;