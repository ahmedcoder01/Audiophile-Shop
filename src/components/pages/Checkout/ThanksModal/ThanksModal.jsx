import React from "react";
import ModalBody from "../../../UI/Modals/ModalBody/ModalBody";
import CheckMark from "../../../../assets/images/shared/desktop/icon-check-mark.svg";
import Title from "../../../UI/Title/Title";
import Text from "../../../UI/Text/Text";
import Button from "../../../UI/Button/Button";
import PurchasedProducts from "./PurchasedProducts";
import classes from "./ThanksModal.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/allActions";

function ThanksModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clickHandler(e) {
    dispatch(cartActions.resetCart());
    navigate("/");
  }

  return (
    <ModalBody className={classes["thanks-modal"]}>
      <img src={CheckMark} alt="Check Mark" />

      <Title size="h3">THANK YOU FOR YOUR ORDER</Title>
      <Text color="gray">You will receive an email confirmation shortly.</Text>

      <PurchasedProducts />

      <Button type="orange" clickEvent={clickHandler}>
        Back To Home
      </Button>
    </ModalBody>
  );
}

export default ThanksModal;
