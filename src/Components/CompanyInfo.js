import React from "react";
import CompanyInfoForm from "./Section/CompanyInfoForm";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";
import Onboarding from "./Section/Onboarding";

const CompanyInfo = () => {
  return (
    <div className="contact form-background">
      <Navbar status={"submit"} />
      <div className="form-site-divide">
        <Onboarding status="company" done={3} />
        <CompanyInfoForm />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyInfo;
