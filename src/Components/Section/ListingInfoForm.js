import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";

const ListingInfoForm = () => {
  const [projectDiscerptionValidate, setProjectDiscerptionValidate] =
    useState(false);
  const [upload, setUpload] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/partnersinfluencers");

    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <FromPagination page={[1, 2, 3, 4]} />
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Listing info
            </h2>

            <div className="social-lick">
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="IDOSize">
                      <img src="./img/label-icon.svg" alt="" /> IDO Size
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="IDOSize"
                      placeholder="Enter diluted valuation "
                      {...register("IDOSize", { required: true })}
                      className={errors.IDOSize ? "incorrect" : "input"}
                    />
                    {errors.IDOSize && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        IDO Size is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="additionalPlatforms">
                      <img src="./img/label-icon.svg" alt="" /> Additional
                      platforms
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="additionalPlatforms"
                      placeholder="Enter  Additional
                        platforms"
                      {...register("additionalPlatforms", { required: true })}
                      className={
                        errors.additionalPlatforms ? "incorrect" : "input"
                      }
                    />
                    {errors.additionalPlatforms && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Additional platforms is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="pitchshowSize">
                      <img src="./img/label-icon.svg" alt="" /> Pitchshow Size
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter  Pitchshow Size"
                      {...register("pitchshowSize", { required: true })}
                      className={errors.pitchshowSize ? "incorrect" : "input"}
                    />
                    {errors.pitchshowSize && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Pitchshow Size is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="dilutedValuation">
                      Diluted Valuation<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="dilutedValuation"
                      placeholder="Enter Diluted Valuation"
                      {...register("dilutedValuation", { required: true })}
                      className={
                        errors.dilutedValuation ? "incorrect" : "input"
                      }
                    />
                    {errors.dilutedValuation && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Diluted Valuation is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="tokenGenerationEven">
                      Token Generation Even
                      <span>*</span>
                    </label>
                    <input
                      type="date"
                      id="tokenGenerationEven"
                      placeholder="25/05/2022"
                      defaultValue="25/05/2022"
                      {...register("tokenGenerationEven", { required: true })}
                      className={
                        errors.tokenGenerationEven ? "incorrect" : "input"
                      }
                    />
                    {errors.tokenGenerationEven && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Token Generation Even is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="listingPrice">
                      Listing Price<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="listingPrice"
                      placeholder="Enter Listing Price"
                      {...register("listingPrice", { required: true })}
                      className={errors.listingPrice ? "incorrect" : "input"}
                    />
                    {errors.listingPrice && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Listing Price is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="pitchshowsAllocationSize">
                      Pitchshows Allocation Size
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="pitchshowsAllocationSize"
                      placeholder="Enter diluted valuation "
                      {...register("pitchshowsAllocationSize", {
                        required: true,
                      })}
                      className={
                        errors.pitchshowsAllocationSize ? "incorrect" : "input"
                      }
                    />
                    {errors.pitchshowsAllocationSize && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Pitchshows Allocation Size is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="pitchshowsTokenPrice">
                      <img src="./img/label-icon.svg" alt="" /> Pitchshows Token
                      Price<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="pitchshowsTokenPrice"
                      placeholder="Enter Pitchshows Token
                      Price"
                      {...register("pitchshowsTokenPrice", { required: true })}
                      className={
                        errors.pitchshowsTokenPrice ? "incorrect" : "input"
                      }
                    />
                    {errors.pitchshowsTokenPrice && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Pitchshows Token Price is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="IDOTimeFrame">
                      IDO Time Frame (Days)
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter  IDO Time Frame "
                      {...register("IDOTimeFrame", { required: true })}
                      className={errors.IDOTimeFrame ? "incorrect" : "input"}
                    />
                    {errors.IDOTimeFrame && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        IDO Time Frame is required
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
            <button type="submit" className="main-btn mt-5">
              Next
            </button>
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
