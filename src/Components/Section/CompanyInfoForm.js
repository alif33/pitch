import React, { useState } from "react";
import FromPagination from "./FromPagination";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyInfo } from "../../store/users/actions";
import toast from "react-hot-toast";
import Select from "react-select";

const CompanyInfoForm = () => {
  const [upload, setUpload] = useState(false);
  const [upload1, setUpload1] = useState(false);
  const [upload2, setUpload2] = useState(false);
  const [uploadFile, setUploadFile] = useState({});
  const [selectState, setSelectState] = useState("");
  const [compayStage, setCompayStage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { users } = useSelector((state) => state);
  const { companyInfo } = users;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log({ selectState: { selectState }, compayStage: { compayStage } });

  const onSubmit = (data) => {
    dispatch(
      setCompanyInfo({
        ...uploadFile,
        selectState,
        compayStage,
        ...data,
      })
    );
    if (
      companyInfo.pitchDeckURL &&
      companyInfo.tokenomicsFileURL &&
      companyInfo.LogoURL
    ) {
      navigate("/metrics-info");
    }
  };

  const handlePitchDeckUpload = (file) => {
    // console.log(file);
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/pitchshow/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.secure_url) {
          setUploadFile({ ...uploadFile, pitchDeckURL: result.secure_url });
          setUpload(true);
        } else {
          toast.error("Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleTokenomicsFileUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/pitchshow/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.secure_url) {
          setUploadFile({
            ...uploadFile,
            tokenomicsFileURL: result.secure_url,
          });
          setUpload1(true);
        } else {
          toast.error("Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogoUpload = (file) => {
    const formDate = new FormData();
    formDate.append("file", file[0]);
    formDate.append("upload_preset", "pitchshow");

    fetch("https://api.cloudinary.com/v1_1/pitchshow/image/upload", {
      method: "post",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.secure_url) {
          setUploadFile({ ...uploadFile, LogoURL: result.secure_url });
          setUpload2(true);
        } else {
          toast.error("Please try again.");
        }
      })
      .catch((err) => console.log(err));
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
              Company info
            </h2>
            <div className="social-lick">
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="email">
                      Company incorporated<span>*</span>
                    </label>
                    <Select
                      options={options}
                      onChange={(e) => setSelectState(e)}
                      components={{ IndicatorSeparator }}
                    />
                    {errors.companyIncorporated && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Company incorporated is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  <div className="form-group">
                    <label htmlFor="email">
                      Company incorporated<span>*</span>
                    </label>
                    <Select
                      options={options}
                      onChange={(e) => setCompayStage(e)}
                      components={{ IndicatorSeparator }}
                    />
                    {errors.blockchainNetwork && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Compay stage is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="projectDiscerption">
                Project description<span>*</span>
              </label>
              <textarea
                id="projectDiscerption"
                placeholder="Enter your Project description"
                defaultValue={companyInfo.projectDiscerption}
                {...register("projectDiscerption", { required: true })}
                className={errors.projectDiscerption ? "incorrect" : "input"}
              />
              {errors.projectDiscerption && (
                <span>
                  <img src="/img/false-icon.svg" alt="" />
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
                  <img src="/img/false-icon.svg" alt="" />
                  Team background is required
                </span>
              )}
            </div>

            <div className="social-lick mb-4">
              <div className="row mt-4">
                <div className="col-md-5">
                  <h5>Links for Socials</h5>
                </div>
                <div className="col-md-5 ms-auto">
                  <h5>Links for community </h5>
                </div>
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
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect Facebook
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="instagram">
                      Telegram*<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="telegram"
                      placeholder="Enter your telegram page "
                      defaultValue={companyInfo.socialsLink.telegram}
                      {...register("telegram", {
                        // pattern:
                        required: true,
                      })}
                      className={errors.telegram ? "incorrect" : "input"}
                    />
                    {errors.telegram && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect telegram
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-4 ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="instagram">
                      Instagram<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Enter your LinkedIn page"
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
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect instagram
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
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect Discord
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
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect LinkedIn
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
                        accept=".jpg, .jpeg, .png,.ppt, .pptx,.txt,.pdf , .txt, text/plain, .doc, .docx, application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
                        src="/img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="/img/news-icon.svg" alt="" />
                    )}

                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) => handlePitchDeckUpload(e.target.files)}
                      accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
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
                        accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
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
                        handleTokenomicsFileUpload(e.target.files)
                      }
                      accept=".jpg, .jpeg, .png, .doc, .docx,.ppt, .pptx,.txt,.pdf"
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
                        accept=".jpg, .jpeg, .png, .svg"
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
                        src="/img/uploaded-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img src="/img/news-icon.svg" alt="" />
                    )}
                    <p>Drag & Drop File Here</p>
                    <input
                      type="file"
                      onChange={(e) => handleLogoUpload(e.target.files)}
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
              <Link to="/contact">
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

export default CompanyInfoForm;
