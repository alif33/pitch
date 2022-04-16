import React, { useState } from "react";
import Popup from "reactjs-popup";
import InputFiled from "./InputFiled";

const SubscribeModal = ({ email, btnName, setEmail }) => {
  const [fadeOut, setFadeOut] = useState(false);
  return (
    <Popup
      className={fadeOut ? "fadeOut" : ""}
      trigger={<button className="main-btn"> {btnName} </button>}
      modal
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <InputFiled setFadeOut={setFadeOut} close={close} email={email} setEmail={setEmail} />
        </div>
      )}
    </Popup>
  );
};

export default SubscribeModal;
