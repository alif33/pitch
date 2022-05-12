import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import db from "../../utils/db";
import { setVideoPitch, usersReset } from "../../store/users/actions";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const VideoPitchForm = ({ setDataProcessing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { users } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(setVideoPitch({ url: data.videoPitch }));

    setDataProcessing(true);
    await addDoc(collection(db, "contact"), {
      ...users.contactInfo,
      ...users.metricsInfo,
      ...users.listingInfo,
      ...users.partnersInfluencers,
      ...users.listingStrategy,
      ...users.foundersInfo,
      ...users.foundersInfo,
      videoPitch: users.videoPitch.url,
      projectDiscerption: users.companyInfo.projectDiscerption,
      teamBackground: users.companyInfo.teamBackground,
      ...users.companyInfo.socialsLink,
    });

    dispatch(usersReset());
    setDataProcessing(false);
    navigate("/congratulations");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2 className="main-title mt-3 py-3 mb-3">video pitch</h2>

            <div className="social-lick">
              <div className="row">
                <div className="col-md-7 m-auto">
                  <div className="video">
                    <img src="img/animation4.gif" className="w-100" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="social-lick mt-4">
              <div className="row mt-4">
                <div className="col-md-5">
                  <h5>UPLOAD video link </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-auto">
                  {" "}
                  <div className="form-group">
                    <p htmlFor="videoPitch">
                      Make sure that all the important topics appear in your
                      video in order to create the best impression.
                    </p>
                    <input
                      type="url"
                      id="videoPitch"
                      placeholder="Enter Market Maker"
                      // defaultValue={listingStrategy.liquidity}
                      {...register("videoPitch", { required: true })}
                      className={errors.videoPitch ? "incorrect" : "input"}
                    />
                    {errors.videoPitch && (
                      <span>
                        <img src="/img/false-icon.svg" alt="" />
                        Liquidity is required{" "}
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
  );
};

export default VideoPitchForm;
