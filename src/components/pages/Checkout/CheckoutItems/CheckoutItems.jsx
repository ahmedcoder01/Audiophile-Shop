import React from "react";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import classes from "./CheckoutItems.module.scss";

function CheckoutItems({ items }) {
  return (
    <div className={classes.checkout__items}>
      {items.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CheckoutItems;
