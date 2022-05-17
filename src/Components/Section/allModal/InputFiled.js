import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { countries } from "../AllCountry";
import { collection, addDoc } from "firebase/firestore";
import db from "../../../utils/db";
import toast from "react-hot-toast";

const InputFiled = ({ close, email, setFadeOut, setEmail }) => {
  const [showList, setShowList] = useState(false);
  const [numberCode, setNumberCode] = useState({ code: "Bd", phoneCode: "88" });
  const [closeModal, setCloseModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setCloseModal(!closeModal);
    const subscribe = await addDoc(collection(db, "subscribes"), {
      name: data.name,
      email: data.email,
      phone: data.phoneNumber,
      code: numberCode.phoneCode,
    });
    if (subscribe) {
      setEmail && setEmail("");
      toast.success("Subscribed");
      setFadeOut(true);
      setTimeout(function () {
        close();
        setFadeOut(false);
      }, 600);
    }
  };
  return (
    <>
      {closeModal ? (
        <>
          <div className="close-section">
            <img src="img/animation4.gif" alt="" />
            <h3>Thanks for contacting us!</h3>
            <p>
              We will be happy to keep in touch with you and update you on
              everything that is important
            </p>
            <button onClick={() => close()} className="main-btn mt-sm-3">
            Close
            </button>
          </div>
        </>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form modal-form"
        >
          <h2 className="main-title my-1 my-sm-3">Contact info</h2>
          <div className="form-group mt-sm-3  ">
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
                <img src="/img/false-icon.svg" alt="" /> Name is required
              </span>
            )}
          </div>
          <div className="form-group mt-sm-3">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              defaultValue={email}
              {...register("email", {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                required: true,
              })}
              className={errors.email ? "incorrect" : "input"}
            />
            {errors.email && (
              <span>
                <img src="/img/false-icon.svg" alt="" />
                Incorrect email
              </span>
            )}
          </div>
          <div className="form-group mt-sm-3 ">
            <label htmlFor="number">
              Phone Number<span>*</span>
            </label>
            <div className="input-number">
              <input
                id="number"
                type="tel"
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
                    alt={numberCode?.code}
                  />
                  <span>
                    (+{numberCode?.phoneCode}){" "}
                    <i>
                      {!showList ? (
                        <img src="/img/down-arrow.svg" alt="" />
                      ) : (
                        <img src="/img/up-arrow.svg" alt="" />
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
                <img src="/img/false-icon.svg" alt="" />
                Incorrect number
              </span>
            )}
          </div>
          <button type="submit" className="main-btn mt-sm-3">
            Subscribe
          </button>
        </form>
      )}
    </>
  );
};

export default InputFiled;
