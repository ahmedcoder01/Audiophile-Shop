import React, { useState } from "react";
import classes from "./PurchasedProducts.module.scss";
import Text from "../../../UI/Text/Text";
import CheckoutItems from "../CheckoutItems/CheckoutItems";
import { useSelector, useDispatch } from "react-redux";
import { formatNum } from "../../../../utils";

function showMoreText(items) {
  if (items.length == 2) {
    return "show one more";
  } else {
    return `show ${items.length - 1} more`;
  }
}

function PurchasedProducts() {
  const dispatch = useDispatch();
  const { totalPrice, vat, shipping, items } = useSelector(
    (state) => state.cart
  );
  const grandTotal = totalPrice + vat + shipping;
  //TODO: create a useReducer instead because the btn text depends on the state
  const [showed, setShowed] = useState([items[0]]);
  const [showMoreBtnText, setShowMoreBtnText] = useState(showMoreText(items));

  function clickHandler() {
    setShowed((prev) => (prev.length === 1 ? items : [items[0]]));
    setShowMoreBtnText((prev) =>
      prev === showMoreText(items) ? "show less" : showMoreText(items)
    );
  }

  return (
    <div className={classes.purchased}>
      <div className={classes["purchased__items"]}>
        <CheckoutItems items={showed} />

        {items.length > 1 && (
          <button
            className={classes.purchased__items__button}
            onClick={clickHandler}
          >
            {showMoreBtnText}
          </button>
        )}
      </div>

      <div className={classes["purchased__grand-total"]}>
        <Text>Grand Total</Text>
        <p className={classes["purchased__grand-total__price"]}>
          ${formatNum(grandTotal)}
        </p>
      </div>
    </div>
  );
}

export default PurchasedProducts;
