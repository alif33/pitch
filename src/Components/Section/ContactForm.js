import React from 'react';

const ContactForm = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <form action="#" className="contact-form">
              <h2 className="main-title">Contact info</h2>
              <div className="form-group">
                <label htmlFor="name">*Full Name</label>
                <input type="text" id="name" required placeholder="your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">*Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">*Phone Number </label>
                <input type="number" id="number" required />
              </div>
              <button className="main-btn">Next</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactForm;