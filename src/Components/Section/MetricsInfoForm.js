import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setMetricsInfo } from "../../store/users/actions";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

const MetricsInfoForm = () => {
  const [upload, setUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState({});
  const [selectValue, setSelectValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state);
  const { metricsInfo } = users;
  const onSubmit = (data) => {
    dispatch(setMetricsInfo({ ...uploadFile, ...selectValue, ...data }));
    navigate("/listing-info");
  };

  const handleSymbolUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/pitchshow/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
      if(result.secure_url){  setUploadFile({ ...uploadFile, symbolURL: result.secure_url });
        setUpload(true);}else{
          toast.error("Please try again.")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const options = [
    { value: "Eth", label: "Eth" },
    { value: "Sol", label: "Sol" },
    { value: "Bsc", label: "Bsc" },
  ];

  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <div className="container">
     
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
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
                    <Select
                      options={options}
                      onChange={(e) => setSelectValue(e)}
                      components={{ IndicatorSeparator }}
                    />
                    {/* <select
                      defaultValue={metricsInfo.blockchainNetwork}
                      {...register("blockchainNetwork", { required: true })}
                      className={
                        errors.blockchainNetwork ? "incorrect" : "input"
                      }
                    >
                      <option value="">Select</option>
                      <option value="Eth">Eth</option>
                      <option value="Sol">Sol</option>
                      <option value="Bsc">Bsc</option>
                    </select> */}
                    {errors.blockchainNetwork && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      defaultValue={metricsInfo.totalSupply}
                      {...register("totalSupply", { required: true })}
                      className={errors.totalSupply ? "incorrect" : "input"}
                    />
                    {errors.totalSupply && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        supply is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="dilutedValuation">
                      Diluted Valuation<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="dilutedValuation1"
                      placeholder="Enter diluted valuation "
                      defaultValue={metricsInfo.dilutedValuation}
                      {...register("dilutedValuation", { required: true })}
                      className={
                        errors.dilutedValuation ? "incorrect" : "input"
                      }
                    />
                    {errors.dilutedValuation && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      defaultValue={metricsInfo.TGEMarketCap}
                      {...register("TGEMarketCap", { required: true })}
                      className={errors.TGEMarketCap ? "incorrect" : "input"}
                    />
                    {errors.TGEMarketCap && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Diluted Valuation is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-5 pt-4 mb-3">
                <div className="col-md-5">
                  <div className="upload-pitch-deck">
                    <label htmlFor="">
                      Token Symbol<span>*</span>
                    </label>
                    <h4>Upload Token Symbol Image</h4>
                    <div className="input-file">
                      <input
                        type="file"
                        onChange={(e) => handleSymbolUpload(e.target.files)}
                        accept=".jpg, .jpeg, .png, .svg"
                      />
                      <button>Upload File</button>
                    </div>
                    <p className="file-size">Svg/Jpeg/Png (50MB max size)</p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload || metricsInfo.symbolURL ? (
                      <img
                        style={{ width: "46px", height: "46px" }}
                        src="/img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="/img/news-icon.svg" alt="" />
                    )}

                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) => handleSymbolUpload(e.target.files)}
                      accept=".jpg, .jpeg, .png, .svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="main-btn mt-5">
              Next
            </button>
            <button className="back-btn mt-3">
              <Link to="/company-info">
                <img src="/img/back-icon.svg" alt="" />
                Back
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MetricsInfoForm;
