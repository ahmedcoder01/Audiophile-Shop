import React, { useEffect, useState } from "react";
import classes from "./CartItem.module.scss";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import { useDispatch } from "react-redux";
import Counter from "../../Counter/Counter";
import { cartActions } from "../../../store/allActions";
import { formatNum } from "../../../utils";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { cartImage, shortName, price, quantity } = item;
  const [storedQuantity, setStoredQuantity] = useState(quantity || 1);

  function incHandler() {
    dispatch(cartActions.addItem({ ...item, quantity: 1 }));
  }
  function decHandler() {
    dispatch(cartActions.removeItem(item.id));
  }

  return (
    <div className={classes.cart__item}>
      <img src={cartImage} alt="Product" />
      <div className={classes.cart__item__details}>
        <Title size="h4">{shortName}</Title>
        <Text color="gray">${formatNum(price)}</Text>
      </div>
      <Counter
        size="small"
        setQuantity={setStoredQuantity}
        quantity={storedQuantity}
        onIncrease={incHandler}
        onDecrease={decHandler}
      />
    </div>
  );
}

export default CartItem;
