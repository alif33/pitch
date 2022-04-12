import React, { useState } from "react";
import { Link } from "react-router-dom";
import FromPagination from "./FromPagination";

const ListingStrategyForm = () => {
  const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
    useState(false);
  const [upload, setUpload] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form action="#" className="contact-form">
            <FromPagination page={[1, 2, 3, 4, 5, 6]} />
            <h2 className="main-title mt-3 py-3">Listing Strategy</h2>

            <div className="social-lick">
              <div className="row mt-2">
                <div className="col-md-5 m-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="email">
                      Title of the selection choice<span>*</span>
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        DEX
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        CEX
                      </label>
                    </div>

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
                      Liquidity($)<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter Amount"
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
                      Market Maker<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter IDO size"
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

export default ListingStrategyForm;
