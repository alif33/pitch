import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContact } from "../../store/users/actions";
import { countries } from "./AllCountry";
import FromPagination from "./FromPagination";

const ContactForm = () => {
  const [showList, setShowList] = useState(false);
  const [numberCode, setNumberCode] = useState({ code: "Bd", phoneCode: "88" });
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(setContact({ ...numberCode, ...data }));
    navigate("/company-info");
    // console.log(data);
  };
  // console.log(numberCode);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <FromPagination page={[1]} />
            <h2 className="main-title my-4">Contact info</h2>
            <div className="form-group mt-3">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                defaultValue={users.contactInfo.name}
                {...register("name", { required: true })}
                className={errors.name ? "incorrect" : "input"}
                placeholder="your name"
              />
              {errors.name && (
                <span>
                  {" "}
                  <img src="./img/false-icon.svg" alt="" /> Name is required
                </span>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                defaultValue={users.contactInfo.email}
                placeholder="example@gmail.com"
                {...register("email", {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  required: true,
                })}
                className={errors.email ? "incorrect" : "input"}
              />
              {errors.email && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect email
                </span>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="number">
                Phone Number<span>*</span>
              </label>
              <div className="input-number">
                <input
                  id="number"
                  defaultValue={users.contactInfo.phoneNumber}
                  type="number"
                  {...register("phoneNumber", { required: true })}
                  className={errors.phoneNumber ? "incorrect" : "input"}
                />
                <div
                  className="number-dropdon"
                  onClick={() => setShowList(!showList)}
                >
                  <div className="input-country-value">
                    <img
                      src={`https://flagcdn.com/${(numberCode?.code).toLocaleLowerCase()}.svg`}
                      alt=""
                    />
                    <span>
                      (+{numberCode?.phoneCode}){" "}
                      <i>
                        {!showList ? (
                          <img src="./img/down-arrow.svg" alt="" />
                        ) : (
                          <img src="./img/up-arrow.svg" alt="" />
                        )}
                      </i>
                    </span>
                  </div>
                  {showList && (
                    <ul>
                      {countries.map((country) => (
                        <li
                          key={country?.code}
                          onClick={() =>
                            setNumberCode({
                              code: country?.code,
                              phoneCode: country?.phone,
                            })
                          }
                        >
                          <img
                            src={`https://flagcdn.com/${(country?.code).toLocaleLowerCase()}.svg`}
                            alt={country?.name}
                          />
                          (+{country?.phone})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {errors.phoneNumber && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect number
                </span>
              )}
            </div>
            <button type="submit" className=" mt-5 main-btn">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
