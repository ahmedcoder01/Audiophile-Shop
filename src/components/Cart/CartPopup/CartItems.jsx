import React from "react";
import CartItem from "./CartItem";
import classes from "./CartItems.module.scss";

function CartItems({ items }) {
  return (
    <div className={classes.cart__items}>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CartItems;
