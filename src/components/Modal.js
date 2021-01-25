import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" srcset="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcset="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
