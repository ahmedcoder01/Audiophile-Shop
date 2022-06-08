import React from "react";
import classes from "./CheckoutItem.module.scss";
import Title from "../../../../UI/Title/Title";
import Text from "../../../../UI/Text/Text";
import { formatNum } from "../../../../../utils";

function CheckoutItem({ item }) {
  const { cartImage, shortName, price, quantity } = item;

  return (
    <div className={classes.checkout__item}>
      <img src={cartImage} alt="Product" />
      <div className={classes.checkout__item__details}>
        <Title size="h4">{shortName}</Title>
        <Text color="gray">${formatNum(price)}</Text>
      </div>
      <p className={classes.quantity}>x{quantity}</p>
    </div>
  );
}

export default CheckoutItem;
