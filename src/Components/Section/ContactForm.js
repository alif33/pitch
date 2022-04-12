import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FromPagination from "./FromPagination";

const ContactForm = () => {
  const [emailValidate, setEmailValidate] = useState(true);
  const [phoneValidate, setPhoneValidate] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form action="#" className="contact-form">
            <FromPagination page={[1]} />
            <h2 className="main-title">Contact info</h2>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>
              <input type="text" id="name" required placeholder="your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className={emailValidate ? "incorrect" : "input"}
              />
              {emailValidate && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect email
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="number">
                Phone Number<span>*</span>
              </label>
              <div className="input-number">
                <input
                  type="text"
                  id="number"
                  className={emailValidate ? "incorrect" : "input"}
                />
                <div className="number-dropdon">

                </div>
              </div>
              {phoneValidate && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect number
                </span>
              )}
            </div>
            <button className="main-btn"><Link to="/companyinfo">Next</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



