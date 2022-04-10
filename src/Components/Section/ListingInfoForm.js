import React, { useState } from 'react';
import FromPagination from './FromPagination';

const ListingInfoForm = () => {
    const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
      useState(false);
    const [upload, setUpload] = useState(false); 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <form action="#" className="contact-form">
              <FromPagination page={[1, 2, 3, 4]} />
              <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
                Listing info
              </h2>

              <div className="social-lick">
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        <img src="./img/label-icon.svg" alt="" /> IDO Size
                        <span>*</span>
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
                        <img src="./img/label-icon.svg" alt="" /> Additional
                        platforms
                        <span>*</span>
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
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        <img src="./img/label-icon.svg" alt="" /> Pitchshow Size
                        <span>*</span>
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
                        Diluted Valuation<span>*</span>
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
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        Token Generation Even
                        <span>*</span>
                      </label>
                      <input
                        type="date"
                        id="facebook"
                        placeholder="25/05/2022"
                         defaultValue="25/05/2022"
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
                        Listing Price<span>*</span>
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
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        Pitchshows Allocation Size
                        <span>*</span>
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
                        <img src="./img/label-icon.svg" alt="" /> Pitchshows
                        Token Price<span>*</span>
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
                <div className="row mt-2">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="email">
                        IDO Time Frame (Days)
                        <span>*</span>
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
                </div>
                <div className="row mt-5 pt-4">
                  <div className="col-md-5">
                    <div className="upload-pitch-deck">
                      <label htmlFor="">
                        Vesting Terms<span>*</span>
                      </label>
                      <h4>Upload Vesting Terms </h4>
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
                <div className="row mt-5">
                  <div className="col-md-5">
                    <div className="upload-pitch-deck">
                      <label htmlFor="">
                        Pitchshows Vesting Terms<span>*</span>
                      </label>
                      <h4>Upload Pitchshows Vesting Terms</h4>
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
              <button className="main-btn mt-5">Next</button>
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

export default ListingInfoForm;