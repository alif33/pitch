import React, { useState } from "react";
import FromPagination from "./FromPagination";

const ContactForm = () => {
  const [emailValidate, setEmailValidate] = useState(true);
  const [phoneValidate, setPhoneValidate] = useState(true);

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
              </div>
              {phoneValidate && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect number
                </span>
              )}
            </div>
            <button className="main-btn">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



