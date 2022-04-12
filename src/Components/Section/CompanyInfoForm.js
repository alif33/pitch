import React, { useState } from "react";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CompanyInfoForm = () => {

  const [upload, setUpload] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    navigate("/metricsinfo");
    console.log(data)};
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <FromPagination page={[1, 2]} />
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Contact info
            </h2>
            <div className="form-group">
              <label htmlFor="projectDiscerption">
                Project discerption<span>*</span>
              </label>
              <textarea
                id="projectDiscerption"
                placeholder="Enter your team background  "
                {...register("projectDiscerption", { required: true })}
                className={errors.projectDiscerption ? "incorrect" : "input"}
              />
              {errors.projectDiscerption && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Project discerption is required
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="teamBackground">
                Team background<span>*</span>
              </label>
              <textarea
              id="teamBackground"
                placeholder="Enter your team background "{...register("teamBackground", { required: true })}
                className={errors.teamBackground ? "incorrect" : "input"}
              />
              {errors.teamBackground && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Team background is required
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
                    <label htmlFor="facebook">
                      Facebook<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter your Facebook page "
                      {...register("facebook", {
                        pattern:
                        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, required: true 
                      })}
                      className={
                        errors.facebook ? "incorrect" : "input"
                      }
                    />
                    {errors.facebook && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Incorrect Facebook
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="instagram">
                      Instagram<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter your Instagram page "
                      {...register("instagram", {
                        pattern:
                        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, required: true 
                      })}
                      className={
                        errors.instagram ? "incorrect" : "input"
                      }
                    />
                    {errors.instagram && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Incorrect Instagram
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="linkedIn">
                      LinkedIn<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="linkedIn"
                      placeholder="Enter your LinkedIn page  "
                      {...register("linkedIn", {
                        pattern:
                        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, required: true 
                      })}
                      className={
                        errors.linkedIn ? "incorrect" : "input"
                      }
                    />
                    {errors.linkedIn && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Incorrect LinkedIn
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="discord">
                      Discord<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="linkedIn"
                      placeholder="Enter your Discord page "
                      {...register("discord", {
                        pattern:
                        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, required: true 
                      })}
                      className={
                        errors.discord ? "incorrect" : "input"
                      }
                    />
                    {errors.discord && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Incorrect Discord
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mt-5 pt-4">
                <div className="col-md-5">
                  <div className="upload-pitch-deck">
                    <label htmlFor="">
                      Pitch Deck<span>*</span>
                    </label>
                    <h4>Upload your Pitch Deck File</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>Upload Deck</button>
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
                    <input type="file"  />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="upload-pitch-deck">
                    <label htmlFor="">
                      Tokenomics Documentation<span>*</span>
                    </label>
                    <h4>Upload your Tokenomics File</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>Upload Tokenomics</button>
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
                    <h4>Upload Logo</h4>
                    <div className="input-file">
                      <input 
                        type="file" 
                        accept="svg/jgeg/png"
                      />
                      <button>Upload Logo</button>
                    </div>
                    <p className="file-size">
                      *Svg/Jpeg/Png (50MB max size)
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
            <button type="submit" className="back-btn mt-3">
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
