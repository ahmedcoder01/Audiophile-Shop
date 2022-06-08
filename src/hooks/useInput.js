import React, { useState } from "react";

export default function useInput(validation) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  let isValid = validation(value) === true;

  let hasError = touched && !isValid;

  let errorMessage = null;
  if (typeof validation(value) === "string") errorMessage = validation(value);

  function inputHandler(e) {
    setValue(e.target.value);
  }

  function startValidating() {
    setTouched(true);
  }

  function reset() {
    setValue("");
  }

  return {
    errorMessage,
    hasError,
    setValue,
    startValidating,
    touched,
    value,
    reset,
    inputHandler,
    isValid,
  };
}
