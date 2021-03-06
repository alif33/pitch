import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setFoundersInfo } from "../../store/users/actions";

const FoundersInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const { foundersInfo } = users;
  const [addFounder, setAddFounder] = useState([1]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(setFoundersInfo({ ...data }));
    navigate("/company-info");
  };

  const handleAddfounder = () => {
    setAddFounder([...addFounder, addFounder.length + 1]);
  };

  const handleFounderRemove = (index) => {
    const founder = addFounder.filter((founder, i) => i !== index);
    setAddFounder(founder);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2 className="main-title mt-3 py-3" style={{ width: "724px" }}>
              Founders Info
            </h2>
            {addFounder.map((founder, index) => (
              <>
                <div
                  key={founder}
                  className={`social-lick mb-4 ${founder !== 1 ? "mt-4" : ""}`}
                >
                  <div className="row mt-2">
                    {founder !== 1 && (
                      <h4 className="mb-3">Founder {founder}</h4>
                    )}
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="founderName">
                          Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          id="founderName"
                          placeholder="Enter full name"
                          defaultValue={foundersInfo.founderName}
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
                          defaultValue={foundersInfo.founderRole}
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
                    defaultValue={foundersInfo.founderDiscerption}
                    {...register("founderDiscerption", { required: true })}
                    className={
                      errors.founderDiscerption ? "incorrect" : "input"
                    }
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
                          defaultValue={foundersInfo.founderLinkedin}
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
                      {founder !== 1 && (
                        <div className="text-end mt-2">
                          <button
                            type="button"
                            onClick={() => handleFounderRemove(index)}
                            className="delete-founder-btn"
                          >
                            <img src="img/delete-founder.svg" alt="" /> Delete
                            Founder
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}

            <div className="social-lick">
              <div className="row mt-3">
                <div className="col-sm-3">
                  <button
                    onClick={handleAddfounder}
                    type="button"
                    className="add-founder"
                  >
                    Add Founder
                  </button>
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

export default FoundersInfoForm;
