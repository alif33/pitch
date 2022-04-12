import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FromPagination from './FromPagination';

const PartnersInfluencersForm = () => {
     const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
       useState(false);
     const [upload, setUpload] = useState(false); 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <form action="#" className="contact-form">
              <FromPagination page={[1, 2, 3, 4, 5]} />
              <h2 className="main-title mt-3 py-3">Partners & influencers</h2>

              <div className="social-lick">
                <div className="row mt-2">
                  <div className="col-md-5 m-auto">
                    {" "}
                    <div className="form-group">
                      <label htmlFor="email">
                        Top Partners<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        placeholder="Enter your top partners"
                        className={
                          projectDiscerptionValidate ? "incorrect" : "input"
                        }
                      />
                      {projectDiscerptionValidate && (
                        <span>
                          <img src="./img/false-icon.svg" alt="" />
                          Incorrect email
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-5 m-auto">
                    {" "}
                    <div className="form-group">
                      <label htmlFor="email">
                        Top influencers<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        placeholder="Enter your top influencers"
                        className={
                          projectDiscerptionValidate ? "incorrect" : "input"
                        }
                      />
                      {projectDiscerptionValidate && (
                        <span>
                          <img src="./img/false-icon.svg" alt="" />
                          Incorrect email
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="main-btn mt-5"><Link to="/partnersinfluencers">Next</Link></button>
              <button className="back-btn mt-3">
                <img src="./img/back-icon.svg" alt="" />
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default PartnersInfluencersForm;