import React from "react";

function usePasswordValidation() {
  return function passwordValidation(value) {
    if (value.match(/^[A-Za-z]\w{7,}/) !== null) return true;

    if (value.trim().length === 0) {
      return "password is empty";
    } else if (!value.match(/[A-Z]/gi)) {
      return "password must include at least an uppercase";
    } else if (value.length < 7) {
      return "password must be at least 7 characters long";
    } else {
      return "invalid password";
    }
  };
}

export default usePasswordValidation;
