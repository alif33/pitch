import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setListingInfo } from "../../store/users/actions";
import toast from "react-hot-toast";

const ListingInfoForm = () => {
  const [upload1, setUpload1] = useState(false);
  const [upload2, setUpload2] = useState(false);
  const [uploadFile, setUploadFile] = useState({});
  const { users } = useSelector((state) => state);
  const { listingInfo } = users;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setListingInfo({ ...uploadFile, ...data }));
    navigate("/partnersin-fluencers");
  };

  const handleVestingTermsUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/developeryeasin/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.secure_url) {
          setUploadFile({ ...uploadFile, vestingTermsURL: result.secure_url });
          setUpload1(true);
        } else {
          toast.error("Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePitchshowsVestingTermsUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/developeryeasin/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.secure_url) {
          setUploadFile({
            ...uploadFile,
            pitchshowsVestingTermsURL: result.secure_url,
          });

          setUpload2(true);
        } else {
          toast.error("Please try again.");
        }
      })
      .catch((err) => console.log(err));
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
                      <div className="label-tootip">
                        <div className="label-tootip-card">
                          <p>Total amount in USD to raise in price value</p>
                        </div>
                        <img src="/img/label-icon.svg" alt="" />
                      </div>
                      IDO Size
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="IDOSize"
                      placeholder="Enter diluted valuation "
                      defaultValue={listingInfo.IDOSize}
                      {...register("IDOSize", { required: true })}
                      className={errors.IDOSize ? "incorrect" : "input"}
                    />
                    {errors.IDOSize && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        IDO Size is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="additionalPlatforms">
                    <div className="label-tootip">
                        <div className="label-tootip-card">
                          <p>Name of platform and amount of tokens 

</p>
                        </div>
                        <img src="/img/label-icon.svg" alt="" />
                      </div> Additional
                      platforms
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="additionalPlatforms"
                      placeholder="Enter  Additional
                        platforms"
                      defaultValue={listingInfo.additionalPlatforms}
                      {...register("additionalPlatforms", { required: true })}
                      className={
                        errors.additionalPlatforms ? "incorrect" : "input"
                      }
                    />
                    {errors.additionalPlatforms && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                    <div className="label-tootip">
                        <div className="label-tootip-card text-center">
                          <p>Token amount </p>
                        </div>
                        <img src="/img/label-icon.svg" alt="" />
                      </div> Pitchshow Size
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Enter  Pitchshow Size"
                      defaultValue={listingInfo.pitchshowSize}
                      {...register("pitchshowSize", { required: true })}
                      className={errors.pitchshowSize ? "incorrect" : "input"}
                    />
                    {errors.pitchshowSize && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      defaultValue={listingInfo.dilutedValuation}
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
              </div>
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="tokenGenerationEven">
                      Token Generation Event
                      <span>*</span>
                    </label>
                    <input
                      type="date"
                      id="tokenGenerationEven"
                      placeholder="25/05/2022"
                      defaultValue={listingInfo.tokenGenerationEven}
                      {...register("tokenGenerationEven", { required: true })}
                      className={
                        errors.tokenGenerationEven ? "incorrect" : "input"
                      }
                    />
                    {errors.tokenGenerationEven && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      defaultValue={listingInfo.listingPrice}
                      {...register("listingPrice", { required: true })}
                      className={errors.listingPrice ? "incorrect" : "input"}
                    />
                    {errors.listingPrice && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      defaultValue={listingInfo.pitchshowsAllocationSize}
                      {...register("pitchshowsAllocationSize", {
                        required: true,
                      })}
                      className={
                        errors.pitchshowsAllocationSize ? "incorrect" : "input"
                      }
                    />
                    {errors.pitchshowsAllocationSize && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Pitchshows Allocation Size is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="pitchshowsTokenPrice">
                    <div className="label-tootip">
                        <div className="label-tootip-card">
                          <p>Discount price for Pitchshow in % and Number 


</p>
                        </div>
                        <img src="/img/label-icon.svg" alt="" />
                      </div> Pitchshows Token
                      Price<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="pitchshowsTokenPrice"
                      placeholder="Enter Pitchshows Token
                      Price"
                      defaultValue={listingInfo.pitchshowsTokenPrice}
                      {...register("pitchshowsTokenPrice", { required: true })}
                      className={
                        errors.pitchshowsTokenPrice ? "incorrect" : "input"
                      }
                    />
                    {errors.pitchshowsTokenPrice && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      id="IDOTimeFrame"
                      placeholder="Enter  IDO Time Frame "
                      defaultValue={listingInfo.IDOTimeFrame}
                      {...register("IDOTimeFrame", { required: true })}
                      className={errors.IDOTimeFrame ? "incorrect" : "input"}
                    />
                    {errors.IDOTimeFrame && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
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
                      <input
                        type="file"
                        onChange={(e) =>
                          handleVestingTermsUpload(e.target.files)
                        }
                        accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
                      />
                      <button>Upload File</button>
                    </div>
                    <p className="file-size">
                      Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload1 || listingInfo.vestingTermsURL ? (
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
                      onChange={(e) => handleVestingTermsUpload(e.target.files)}
                      accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-3">
                <div className="col-md-5">
                  <div className="upload-pitch-deck">
                    <label htmlFor="">
                      Pitchshows Vesting Terms<span>*</span>
                    </label>
                    <h4>Upload Pitchshows Vesting Terms</h4>
                    <div className="input-file">
                      <input
                        type="file"
                        onChange={(e) =>
                          handlePitchshowsVestingTermsUpload(e.target.files)
                        }
                        accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
                      />
                      <button>Upload File</button>
                    </div>
                    <p className="file-size">
                      Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload2 || listingInfo.pitchshowsVestingTermsURL ? (
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
                      onChange={(e) =>
                        handlePitchshowsVestingTermsUpload(e.target.files)
                      }
                      accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="main-btn mt-5">
              Next
            </button>
            <button className="back-btn mt-3">
              <Link to="/metrics-info">
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

export default ListingInfoForm;
