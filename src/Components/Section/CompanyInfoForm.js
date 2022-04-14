import React, { useState } from "react";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyInfo } from "../../store/users/actions";

const CompanyInfoForm = () => {
  const [upload, setUpload] = useState(false);
  const [upload1, setUpload1] = useState(false);
  const [upload2, setUpload2] = useState(false);
  const [uploadFile, setUploadFile] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { users } = useSelector((state) => state);
  const { companyInfo } = users;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setCompanyInfo({ ...uploadFile, ...data }));
    navigate("/metrics-info");
  };

  const handlePitchDeckUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/developeryeasin/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        setUploadFile({ ...uploadFile, pitchDeckURL: result.secure_url });
        setUpload(true);
      })
      .catch((err) => console.log(err));
  };
  const handleTokenomicsFileUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/developeryeasin/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        setUploadFile({ ...uploadFile, tokenomicsFileURL: result.secure_url });
        setUpload1(true);
      })
      .catch((err) => console.log(err));
  };

  const handleLogoUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/developeryeasin/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        setUploadFile({ ...uploadFile, LogoURL: result.secure_url });
        setUpload2(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <FromPagination page={[1, 2]} />
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Company info
            </h2>
            <div className="form-group">
              <label htmlFor="projectDiscerption">
                Project discerption<span>*</span>
              </label>
              <textarea
                id="projectDiscerption"
                placeholder="Enter your team background "
                defaultValue={companyInfo.projectDiscerption}
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

            <div className="form-group mt-5">
              <label htmlFor="teamBackground">
                Team background<span>*</span>
              </label>
              <textarea
                id="teamBackground"
                placeholder="Enter your team background"
                defaultValue={companyInfo.teamBackground}
                {...register("teamBackground", { required: true })}
                className={errors.teamBackground ? "incorrect" : "input"}
              />
              {errors.teamBackground && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Team background is required
                </span>
              )}
            </div>

            <div className="social-lick mb-4">
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
                      placeholder="Enter your Facebook page"
                      defaultValue={companyInfo.socialsLink.facebook}
                      {...register("facebook", {
                        pattern:
                          /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\\-]*\/)*([\w\\-]*)/,
                        required: true,
                      })}
                      className={errors.facebook ? "incorrect" : "input"}
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
                      placeholder="Enter your Instagram page"
                      defaultValue={companyInfo.socialsLink.instagram}
                      {...register("instagram", {
                        pattern:
                          /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\\.]+)/im,
                        required: true,
                      })}
                      className={errors.instagram ? "incorrect" : "input"}
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
              <div className="row mt-4 ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="linkedIn">
                      LinkedIn<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="linkedIn"
                      placeholder="Enter your LinkedIn page "
                      defaultValue={companyInfo.socialsLink.linkedIn}
                      {...register("linkedIn", {
                        pattern:
                          /(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\\/]))?/,
                        required: true,
                      })}
                      className={errors.linkedIn ? "incorrect" : "input"}
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
                      id="discord"
                      placeholder="Enter your Discord page "
                      defaultValue={companyInfo.socialsLink.discord}
                      {...register(
                        "discord"
                        // {
                        //   pattern:
                        //   /discordapp.com\/api\/webhooks\/([^\\/]+)\/([^\\/]+)/,
                        //   required: true,
                        // }
                      )}
                      className={errors.discord ? "incorrect" : "input"}
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
                      <input
                        type="file"
                        onChange={(e) => handlePitchDeckUpload(e.target.files)}
                      />
                      <button>Upload Deck</button>
                    </div>
                    <p className="file-size">
                      *Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload || companyInfo.pitchDeckURL ? (
                      <img
                        style={{ width: "46px", height: "46px" }}
                        src="./img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="./img/news-icon.svg" alt="" />
                    )}

                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) => handlePitchDeckUpload(e.target.files)}
                    />
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
                      <input
                        type="file"
                        onChange={(e) =>
                          handleTokenomicsFileUpload(e.target.files)
                        }
                      />
                      <button>Upload Tokenomics</button>
                    </div>
                    <p className="file-size">
                      *Pdf/Word/Jpeg/Png (50MB max size)
                    </p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload1 || companyInfo.tokenomicsFileURL ? (
                      <img
                        style={{ width: "46px", height: "46px" }}
                        src="./img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="./img/news-icon.svg" alt="" />
                    )}
                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleTokenomicsFileUpload(e.target.files)
                      }
                    />
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
                        onChange={(e) => handleLogoUpload(e.target.files)}
                      />
                      <button>Upload Logo</button>
                    </div>
                    <p className="file-size">*Svg/Jpeg/Png (50MB max size)</p>
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="drag-drop-file">
                    {upload2 || companyInfo.LogoURL ? (
                      <img
                        style={{ width: "46px", height: "46px" }}
                        src="./img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="./img/news-icon.svg" alt="" />
                    )}
                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) => handleLogoUpload(e.target.files)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="main-btn mt-5">Next</button>
            <button className="back-btn mt-3">
              <Link to="/contact">
                <img src="./img/back-icon.svg" alt="" />
                Back
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
