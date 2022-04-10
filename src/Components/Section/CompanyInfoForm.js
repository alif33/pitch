import React, { useState } from "react";
import FromPagination from "./FromPagination";

const CompanyInfoForm = () => {
  const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
    useState(false);
  const [upload, setUpload] = useState(true);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form action="#" className="contact-form">
            <FromPagination page={[1, 2]} />
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Contact info
            </h2>
            <div className="form-group">
              <label htmlFor="email">
                Project discerption<span>*</span>
              </label>
              <textarea
                id="projectDiscerption"
                placeholder="Enter your team background  "
                className={projectDiscerptionValidate ? "incorrect" : "input"}
              />
              {projectDiscerptionValidate && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect email
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Team background<span>*</span>
              </label>
              <textarea
                id="projectDiscerption"
                placeholder="Enter your team background "
                className={projectDiscerptionValidate ? "incorrect" : "input"}
              />
              {projectDiscerptionValidate && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect email
                </span>
              )}
            </div>

            <div className="social-lick">
              <div className="row mt-4">
                <h5>links for Socials: </h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="email">
                      Facebook<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter your linkedIn page "
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
                      Instagram<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter your Instagram page "
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
                      linkedIn<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter your linkedIn page  "
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
                      Discord<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter your Discord page "
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
                      Pitch deck<span>*</span>
                    </label>
                    <h4>Upload your Pitch Deck File</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>upload deck</button>
                    </div>
                    <p className="file-size">
                      *Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
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
                      Pitch deck<span>*</span>
                    </label>
                    <h4>Upload your Pitch Deck File</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>upload deck</button>
                    </div>
                    <p className="file-size">
                      *Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    <img src="./img/news-icon.svg" alt="" />
                    <p>Drag & Drop File Here</p>
                    <input type="file" />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="upload-pitch-deck">
                    <label htmlFor="">
                      Logo<span>*</span>
                    </label>
                    <h4>Upload your Pitch Deck File</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>upload deck</button>
                    </div>
                    <p className="file-size">
                      *Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    <img src="./img/news-icon.svg" alt="" />
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

export default CompanyInfoForm;
