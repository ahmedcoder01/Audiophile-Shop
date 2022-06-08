import React, { useState, useEffect } from "react";
import classes from "../AuthForms.module.scss";
import Logo from "../../../../assets/images/shared/desktop/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../../hooks/useInput";
import usePasswordValidation from "../../../../hooks/usePasswordValidation";
import useEmailValidation from "../../../..//hooks/useEmailValidation";
import useUser from "../../../../hooks/useUser";
import useSendNotification from "../../../../hooks/useSendNotification";
import { useDispatch } from "react-redux";
import { signup } from "../../../../store/slices/authSlice/authActions";

function SignUp() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const emailValidation = useEmailValidation();
  const passwordValidation = usePasswordValidation();
  const navigate = useNavigate();
  const user = useUser();

  if (user) {
    navigate(-1);
  }

  const {
    hasError: emailError,
    value: emailValue,
    isValid: emailValid,
    startValidating: emailBlur,
    inputHandler: emailHandler,
    errorMessage: emailErrorMessage,
  } = useInput(emailValidation);

  const {
    hasError: passError,
    value: passValue,
    isValid: passValid,
    startValidating: passBlur,
    inputHandler: passHandler,
    errorMessage: passErrorMessage,
  } = useInput(passwordValidation);

  function repeatPassValidation(value) {
    if (value === passValue) return true;
    else return "passwords do not match";
  }
  const {
    hasError: repeatPassError,
    isValid: repeatPassValid,
    startValidating: repeatPassBlur,
    inputHandler: repeatPassHandler,
    errorMessage: repeatPassErrorMessage,
  } = useInput(repeatPassValidation);

  function nameValidation(value) {
    if (value.trim() !== "") return true;
    else return "name is empty";
  }
  const {
    hasError: nameError,
    isValid: nameValid,
    value: nameValue,
    startValidating: nameBlur,
    inputHandler: nameHandler,
    errorMessage: nameErrorMessage,
  } = useInput(nameValidation);

  async function submitHandler(e) {
    nameBlur();
    repeatPassBlur();
    passBlur();
    emailBlur();
    e.preventDefault();

    if (!emailValid || !passValid || !repeatPassValid || !nameValid) return;

    setLoading(true);
    try {
      setError("");

      dispatch(
        signup({
          displayName: nameValue,
          email: emailValue,
          password: passValue,
        })
      );

      navigate("/", { replace: true });
    } catch {
      setError("Cannot signup now. Please try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <form className={classes["auth"]} onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <div className={classes["input__holder"]}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              onInput={nameHandler}
              autoComplete="on"
            />
            {nameError && (
              <span className={classes["error"]}>{nameErrorMessage}</span>
            )}

            <input
              type="email"
              id="email"
              placeholder="Email address"
              onInput={emailHandler}
              autoComplete="on"
            />
            {emailError && (
              <span className={classes["email-error"]}>
                {emailErrorMessage}
              </span>
            )}
            <input
              type="password"
              id="pass"
              placeholder="Password"
              onInput={passHandler}
              autoComplete="off"
            />
            {passError && (
              <span className={classes["pass-error"]}>{passErrorMessage}</span>
            )}
            <input
              type="password"
              id="repeat-pass"
              placeholder="Repeat Password"
              onInput={repeatPassHandler}
              autoComplete="on"
            />
            {repeatPassError && (
              <span className={classes["pass-error"]}>
                {repeatPassErrorMessage}
              </span>
            )}
          </div>
          <button disabled={isLoading}>Create an account</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signin">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
