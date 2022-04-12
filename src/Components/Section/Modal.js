import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {modalShow && (
        <div className="modal-section">
          <div className="modal-info">
            <p>
              We use our own and third-party cookies on our websites to enhance
              your experience, analyze traffic, and for security and marketing.
              For more info or to modify cookies, see our{" "}
              <Link to="/">Cookie Policy</Link> or go to{" "}
              <Link to="/">Manage Settings</Link>.
            </p>
            <div>
              {" "}
              <button className="namage"> Manage Settings</button>
              <button className="main-btn">dismiss</button>
              <span onClick={() => setModalShow(false)}>
                <img src="./img/modal-close.svg" alt="" />
                <img src="./img/modal-close2.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
