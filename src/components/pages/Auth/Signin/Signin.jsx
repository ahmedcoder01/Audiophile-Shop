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
import { signin } from "../../../../store/slices/authSlice/authActions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const emailValidation = useEmailValidation();
  const passwordValidation = usePasswordValidation();
  const user = useUser();
  // optional navigation to the prevoius page if the statement is false
  const notify = useSendNotification();

  useEffect(() => {
    if (user) {
      navigate(-1, { replace: true });
    }
  }, [user, navigate]);

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

  async function submitHandler(e) {
    // marking inputs as finished to validate
    passBlur();
    emailBlur();
    e.preventDefault();

    if (!emailValid || !passValid) return;

    setLoading(true);
    try {
      setError(null);
      dispatch(signin(emailValue, passValue));
      if (user) {
        notify({ message: `Signed in successfully`, status: "success" });
        navigate("/", { replace: true });
      } else {
        throw new Error("email or password is not correct");
      }
    } catch (err) {
      setError(err.message);
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
          <h2>Login</h2>
          <div className={classes["input__holder"]}>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              onInput={emailHandler}
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
            />
            {passError && (
              <span className={classes["pass-error"]}>{passErrorMessage}</span>
            )}
          </div>
          {hasError && <span className={classes.error}>{hasError}</span>}
          <button disabled={isLoading}>Log in to your account</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
