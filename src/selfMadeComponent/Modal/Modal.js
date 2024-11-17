import React, { useState, Fragment } from "react";
import "./Modal.css";
const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen, "sss");
  return (
    <Fragment>
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <h1>modal</h1>
            <p onClick={() => setIsOpen(false)}>X</p>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(true)}>{children}</button>
    </Fragment>
  );
};

export default Modal;
