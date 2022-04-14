import React from "react";
import ContactForm from "./Section/ContactForm";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar status={"submit"} />
        <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
