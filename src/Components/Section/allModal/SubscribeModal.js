import React from 'react';
import Popup from 'reactjs-popup';
import InputFiled from './InputFiled';

const SubscribeModal = ({email, btnName}) => {
    return (
        <Popup
        trigger={<button className="main-btn"> {btnName} </button>}
        modal
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <InputFiled close={close} email={email}/>
          </div>
        )}
      </Popup>
    );
};

export default SubscribeModal;