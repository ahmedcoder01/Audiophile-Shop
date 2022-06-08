import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import ModalBody from "./ModalBody/ModalBody";

function SigninModal({ hide }) {
  return (
    <ModalBody hide={hide.bind(false)}>
      <Title size="h3">You must login</Title>
      <Button type="orange" link="/signin">
        Sign In
      </Button>
    </ModalBody>
  );
}

export default SigninModal;
