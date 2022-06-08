import React from "react";
import classes from "./Counter.module.scss";

function Counter({
  size = "",
  setQuantity,
  quantity,
  onIncrease = () => {},
  onDecrease = () => {},
}) {
  function incrementHandler(e) {
    if (quantity === 8) return;
    setQuantity((prev) => prev + 1);
    onIncrease();
  }
  function decrementHandler(e) {
    onDecrease();

    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className={`${classes["product__actions__counter"]} ${classes[size]}`}>
      <button onClick={decrementHandler}>-</button>
      <span className={classes["product__actions__counter__quantity"]}>
        {quantity}
      </span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default Counter;
