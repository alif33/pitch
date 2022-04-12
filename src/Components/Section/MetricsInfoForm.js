import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FromPagination from './FromPagination';

const MetricsInfoForm = () => {
    const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
      useState(false);
    const [upload, setUpload] = useState(false); 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <form action="#" className="contact-form">
              <FromPagination page={[1, 2, 3]} />
              <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
                Listing info
              </h2>

              <div className="social-lick">
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        Blockchain Network<span>*</span>
                      </label>
                      <select>
                        <option value="1" selected>
                          Select
                        </option>
                        <option value="Eth">Eth</option>
                        <option value="Sol">Sol</option>
                        <option value="Bsc">Bsc</option>
                      </select>
                      {projectDiscerptionValidate && (
                        <span>
                          <img src="./img/false-icon.svg" alt="" />
                          Incorrect email
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-5 ms-auto">
                    {" "}
                    <div className="form-group">
                      <label htmlFor="email">
                        Total supply<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        placeholder="Enter total supply "
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
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        Diluted Valuation<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="facebook"
                        placeholder="Enter diluted valuation "
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
                  <div className="col-md-5 ms-auto">
                    {" "}
                    <div className="form-group">
                      <label htmlFor="email">
                        TGE Market Cap<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        placeholder="Enter TGE Market Cap"
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
                <div className="row mt-5 pt-4">
                  <div className="col-md-5">
                    <div className="upload-pitch-deck">
                      <label htmlFor="">
                        Token Symbol<span>*</span>
                      </label>
                      <h4>Upload your Pitch Deck File</h4>
                      <div className="input-file">
                        <input type="file" />
                        <button>upload deck</button>
                      </div>
                      <p className="file-size">Svg/Jpeg/Png (50MB max size)</p>
                    </div>
                  </div>
                  <div className="col-md-5 ms-auto">
                    <div className="drag-drop-file">
                      {upload ? (
                        <img
                          style={{ width: "46px", height: "46px" }}
                          src="./img/uploaded-icon.svg"
                          alt=""
                        />
                      ) : (
                        <img src="./img/news-icon.svg" alt="" />
                      )}

                      <p>Drag & Drop File Here</p>
                      <input type="file" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="main-btn mt-5"><Link to="/companyinfo">Next</Link></button>
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

export default MetricsInfoForm;