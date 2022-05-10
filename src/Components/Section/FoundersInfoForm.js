import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const FoundersInfoForm = ({founderForm, setFounderForm}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/company-info");
  };

  for (let i = 0; i < founderForm; i++) {
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)}className="contact-form">
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Founders Info
            </h2>


            <div className="social-lick mb-4">
              <div className="row mt-2">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="founderName">
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="founderName"
                      placeholder="Enter full name"
                      // defaultValue={companyInfo.socialsLink.facebook}
                      {...register("founderName", {
                        required: true,
                      })}
                      className={errors.founderName ? "incorrect" : "input"}
                    />
                    {errors.founderName && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect founderName
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-5 ms-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="founderRole">
                      Role<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="founderRole"
                      placeholder="Enter Role"
                      // defaultValue={companyInfo.socialsLink.instagram}
                      {...register("founderRole", {
                        required: true,
                      })}
                      className={errors.founderRole ? "incorrect" : "input"}
                    />
                    {errors.founderRole && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Incorrect Role
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="founderDiscerption">
                Background<span>*</span>
              </label>
              <textarea
                id="founderDiscerption"
                placeholder="Enter Background ..."
                // defaultValue={companyInfo.projectDiscerption}
                {...register("founderDiscerption", { required: true })}
                className={errors.founderDiscerption ? "incorrect" : "input"}
              />
              {errors.founderDiscerption && (
                <span>
                  <img src="/img/false-icon.svg" alt="" />
                  Project discerption is required
                </span>
              )}
            </div>
            <div className="social-lick">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="founderLinkedin">
                      Linkedin<span>*</span>
                    </label>
                    <input
                      id="founderLinkedin"
                      placeholder="Enter Linkedin link"
                      // defaultValue={companyInfo.projectDiscerption}
                      {...register("founderLinkedin", { required: true })}
                      className={
                        errors.founderLinkedin ? "incorrect" : "input"
                      }
                    />
                    {errors.founderLinkedin && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Linkedin is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="social-lick">
              <div className="row mt-3">
                <div className="col-sm-3">
                  <button className="add-founder">Add Founder</button>
                </div>
              </div>
            </div>

            <button type="submit" className="main-btn mt-5">Next</button>
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

export default FoundersInfoForm;
