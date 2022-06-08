import React, { memo } from "react";
import classes from "./Button.module.scss";
import { useNavigate } from "react-router-dom";

function Button({
  type,
  children,
  link = null,
  clickEvent = null,
  size = null,
  submit = false,
  ...inputProps
}) {
  const navigate = useNavigate();

  function clickHandler(e) {
    if (link) {
      navigate(link);
    }
  }

  return (
    <button
      {...inputProps}
      type={submit ? "submit" : "button"}
      className={`${classes.button} ${classes[type]} ${classes[size]}`}
      onClick={!clickEvent ? clickHandler : clickEvent}
    >
      {children}
    </button>
  );
}

export default memo(Button);
