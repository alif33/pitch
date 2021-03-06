import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useDispatch, useSelector } from "react-redux";
import { setPartnersInfluencers } from "../../store/users/actions";

const PartnersInfluencersForm = () => {
  const {users} = useSelector(state=>state);
  const {partnersInfluencers} = users;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setPartnersInfluencers(data));
    navigate("/listing-strategy");

    //  console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2 className="main-title mt-3 py-3">Partners & influencers</h2>

            <div className="social-lick">
              <div className="row mt-2">
                <div className="col-md-12 m-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="topPartners">
                      Top Partners<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="topPartners"
                      placeholder="Enter your top partners"
                      defaultValue={partnersInfluencers.topPartners}
                      {...register("topPartners", { required: true })}
                      className={errors.topPartners ? "incorrect" : "input"}
                    />
                    {errors.topPartners && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Top Partners is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 m-auto">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="topInfluencers">
                      Top influencers<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="topInfluencers"
                      placeholder="Enter your top influencers"
                      defaultValue={partnersInfluencers.topInfluencers}
                      {...register("topInfluencers", { required: true })}
                      className={errors.topInfluencers ? "incorrect" : "input"}
                    />
                    {errors.topInfluencers && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Top influencers is required{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button className="main-btn mt-5">Next</button>
            <button className="back-btn mt-3">
              <Link to="/listing-info">
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

export default PartnersInfluencersForm;
