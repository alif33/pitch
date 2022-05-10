import React from "react";
import ContactForm from "./Section/ContactForm";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";
import Onboarding from "./Section/Onboarding";

const Contact = () => {
  return (
    <div className="contact form-background">
      <Navbar status={"submit"} />
      <div className="form-site-divide">
        <Onboarding status="contact" done="" />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
