import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import classes from "./Input.module.scss";

function Input({ name, label, placeholder, fullWidth = false, ...inputProps }) {
  const [, { touched, error }] = useField(name);

  const showErrorTheme = touched && error;

  return (
    <div
      className={`${classes.input} ${
        fullWidth ? classes["input-full-width"] : ""
      }`}
    >
      <div className={classes["input__info-holder"]}>
        <label
          htmlFor={name}
          className={showErrorTheme ? classes.label__error : ""}
        >
          {label}
        </label>

        {/* Input Error Message */}
        <ErrorMessage name={name}>
          {(msg) => (
            <p className={classes["input__info-holder__error"]}>{msg}</p>
          )}
        </ErrorMessage>
      </div>

      <Field
        {...inputProps}
        name={name}
        placeholder={placeholder}
        className={`${classes.input__field}  ${
          showErrorTheme ? classes.input__error : ""
        }`}
      />
    </div>
  );
}

export default Input;
