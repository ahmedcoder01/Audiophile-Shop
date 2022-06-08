import React from "react";
import classes from "./Overlay.module.scss";

function Overlay({ children, hide }) {
  function clickHandler(event) {
    // passed function that closes the Modal
    //* false is binded to it,so we don't have to pass false everytime
    hide();
  }

  return (
    <div className={classes.overlay} onClick={clickHandler}>
      {children}
    </div>
  );
}

export default Overlay;
