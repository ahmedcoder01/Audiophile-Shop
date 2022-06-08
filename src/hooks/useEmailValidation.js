import React from "react";

function useEmailValidation() {
  return function emailValidation(value) {
    if (/\w+@\w+\.\w+/gi.test(value)) return true;

    if (value.trim().length === 0) {
      return "password is empty";
    } else if (!value.match(/@/gi)) {
      return "email must include '@'";
    } else if (!value.match(/\.\w+$/gi)) {
      return "email must include a high level domain";
    } else {
      return "invalid email";
    }
  };
}

export default useEmailValidation;
