import React from "react";
import classes from "./ModalBody.module.scss";
import Overlay from "./Overlay/Overlay";

function ModalBody({ children, hide = () => {}, className = null }) {
  function clickHandler(e) {
    e.stopPropagation();
  }

  return (
    <Overlay hide={hide}>
      <div
        className={`${classes["modal-body"]} ${className}`}
        onClick={clickHandler}
      >
        {children}
      </div>
    </Overlay>
  );
}

export default ModalBody;
