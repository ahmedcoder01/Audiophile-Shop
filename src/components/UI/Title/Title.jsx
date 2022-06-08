import React from "react";
import classes from "./Title.module.scss";

function Title({
  children,
  size = "h1",
  weight = "w600",
  color = "black",
  className = "",
}) {
  return (
    <h2
      className={`${classes[size]} ${classes.heading} ${classes[weight]} ${classes[color]} ${className}`}
    >
      {children}
    </h2>
  );
}

export default Title;
