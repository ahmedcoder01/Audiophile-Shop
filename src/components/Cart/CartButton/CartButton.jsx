import React from "react";
import classes from "./CartButton.module.scss";
import Icon from "../../../assets/images/shared/desktop/icon-cart.svg";
import { useSelector } from "react-redux";
import { uiActions } from "../../../store/allActions";
import { useDispatch } from "react-redux";

function CartButton() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  function clickHandler(e) {
    dispatch(uiActions.setCartActive());
  }

  return (
    <button className={classes.icon} onClick={clickHandler}>
      <img src={Icon} alt="Cart" />
      <span>{totalQuantity}</span>
    </button>
  );
}

export default CartButton;
