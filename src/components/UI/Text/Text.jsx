import React from "react";
import classes from "./Text.module.scss";

function Text({ children, type = "text", className = "", color = "" }) {
  return (
    <p className={`${classes[type]} ${classes[color]} ${className}`}>
      {children}
    </p>
  );
}

export default Text;
