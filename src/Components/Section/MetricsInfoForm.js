import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";

const MetricsInfoForm = () => {
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
    navigate("/listinginfo");

    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <FromPagination page={[1, 2, 3]} />
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Metrics info
            </h2>

            <div className="social-lick">
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="email">
                      Blockchain Network<span>*</span>
                    </label>
                    <select
                      {...register("blockchainNetwork", { required: true })}
                      className={
                        errors.blockchainNetwork ? "incorrect" : "input"
                      }
                    >
                      <option value="">Select</option>
                      <option value="Eth">Eth</option>
                      <option value="Sol">Sol</option>
                      <option value="Bsc">Bsc</option>
                    </select>
                    {errors.blockchainNetwork && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Blockchain Network is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="totalSupply">
                      Total supply<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="totalSupply"
                      placeholder="Enter total supply "
                      {...register("totalSupply", { required: true })}
                      className={
                        errors.totalSupply ? "incorrect" : "input"
                      }
                    />
                     {errors.totalSupply && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        supply is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="dilutedValuation">
                      Diluted Valuation<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="dilutedValuation1"
                      placeholder="Enter diluted valuation "
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
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="TGEMarketCap">
                      TGE Market Cap<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="TGEMarketCap"
                      placeholder="Enter TGE Market Cap"
                      {...register("TGEMarketCap", { required: true })}
                      className={
                        errors.TGEMarketCap ? "incorrect" : "input"
                      }
                    />
                     {errors.TGEMarketCap && (
                      <span>
                        <img src="./img/false-icon.svg" alt="" />
                        Diluted Valuation is required{" "}
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
                    <h4>Upload Token Symbol Image</h4>
                    <div className="input-file">
                      <input type="file" />
                      <button>Upload File</button>
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

export default MetricsInfoForm;
