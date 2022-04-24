import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FromPagination from "./FromPagination";
import { useSelector, useDispatch } from "react-redux";
import { setListingStrategy, usersReset } from "../../store/users/actions";
import { collection, addDoc } from "firebase/firestore";
// import db from "firebase/app";
import db from "../../utils/db";
import DataProcessing from "../DataProcessing";

const ListingStrategyForm = () => {
  const [dataProcessing, setDataProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { users } = useSelector((state) => state);
  const { listingStrategy } = users;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    setDataProcessing(true);
    await dispatch(setListingStrategy(data));

    await addDoc(collection(db, "contact"), {
      ...users.contactInfo,
      ...users.metricsInfo,
      ...users.listingInfo,
      ...users.partnersInfluencers,
      ...users.listingStrategy,
      projectDiscerption: users.companyInfo.projectDiscerption,
      teamBackground: users.companyInfo.teamBackground,
      ...users.companyInfo.socialsLink,
    });

    dispatch(usersReset());
    navigate("/congratulations")
    setDataProcessing(false);
  };

  return (
    <>
      {dataProcessing ? (
        <>
          <DataProcessing />
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form"
                >
                  <FromPagination page={[1, 2, 3, 4, 5, 6]} />
                  <h2 className="main-title mt-3 py-3 mb-3">
                    Listing Strategy
                  </h2>

                  <div className="social-lick">
                    <div className="row mt-2">
                      <div className="col-md-5 m-auto">
                        {" "}
                        <div className="form-group">
                          <label htmlFor="email">
                            Title of the selection choice<span>*</span>
                          </label>
                          <div className="form-check">
                            <input
                              type="radio"
                              value="DEX"
                              id="choiceTitleSelection1"
                              {...register("choiceTitleSelection", {
                                required: true,
                              })}
                              className={
                                errors.choiceTitleSelection
                                  ? "incorrect form-check-input"
                                  : "input form-check-input"
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="choiceTitleSelection1"
                            >
                              DEX
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              id="choiceTitleSelection2"
                              value="CEX"
                              {...register("choiceTitleSelection", {
                                required: true,
                              })}
                              className={
                                errors.choiceTitleSelection
                                  ? "incorrect form-check-input"
                                  : "input form-check-input"
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="choiceTitleSelection2"
                            >
                              CEX
                            </label>
                          </div>

                          {errors.choiceTitleSelection && (
                            <span>
                              <img src="/img/false-icon.svg" alt="" />
                              Title of the selection choice is required{" "}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-5 m-auto">
                        {" "}
                        <div className="form-group">
                          <label htmlFor="liquidity">
                            Liquidity($)<span>*</span>
                          </label>
                          <input
                            type="text"
                            id="liquidity"
                            placeholder="Enter Amount"
                            defaultValue={listingStrategy.liquidity}
                            {...register("liquidity", { required: true })}
                            className={errors.liquidity ? "incorrect" : "input"}
                          />
                          {errors.liquidity && (
                            <span>
                              <img src="/img/false-icon.svg" alt="" />
                              Liquidity is required{" "}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-5 m-auto">
                        {" "}
                        <div className="form-group">
                          <label htmlFor="marketMaker">
                            Market Maker<span>*</span>
                          </label>
                          <input
                            type="text"
                            id="marketMaker"
                            placeholder="Enter IDO Size"
                            defaultValue={listingStrategy.marketMaker}
                            {...register("marketMaker", { required: true })}
                            className={
                              errors.marketMaker ? "incorrect" : "input"
                            }
                          />
                          {errors.marketMaker && (
                            <span>
                              <img src="/img/false-icon.svg" alt="" />
                              Market Maker is required{" "}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="main-btn mt-5">
                    Submit
                  </button>
                  <button className="back-btn mt-3">
                    <Link to="/partnersin-fluencers">
                      <img src="/img/back-icon.svg" alt="" />
                      Back
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ListingStrategyForm;
