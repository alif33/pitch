import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContact } from "../../store/users/actions";
import FromPagination from "./FromPagination";


const ContactForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(setContact(data));
    navigate("/companyinfo");
    // console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form onSubmit={ handleSubmit(onSubmit) } className="contact-form">
            <FromPagination page={[1]} />
            <h2 className="main-title">Contact info</h2>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
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
            <div className="form-group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, required: true 
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
            <div className="form-group">
              <label htmlFor="number">
                Phone Number<span>*</span>
              </label>
              <div className="input-number">
                <input
                  id="number"
                  type="number" {...register("phoneNumber", {required: true  })}
                  className={errors.phoneNumber ? "incorrect" : "input"}
                />
                <div className="number-dropdon"></div>
              </div>
              {errors.phoneNumber && (
                <span>
                  <img src="./img/false-icon.svg" alt="" />
                  Incorrect number
                </span>
              )}
            </div>
            <button type="submit" className="main-btn">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
