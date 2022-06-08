import React from "react";
import classes from "./Prices.module.scss";
import { useSelector } from "react-redux";
import { formatNum } from "../../../../utils";

function Prices() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const vatPrice = useSelector((state) => state.cart.vat);
  const shippingPrice = useSelector((state) => state.cart.shipping);

  const grandTotal = totalPrice + vatPrice + shippingPrice;

  return (
    <div className={classes.prices}>
      <ul>
        <li>
          <p>Total</p>
          <span>${formatNum(totalPrice)}</span>
        </li>

        <li>
          <p>Shipping</p>
          <span>${formatNum(shippingPrice)}</span>
        </li>

        <li>
          <p>VAT (INCLUDED)</p>
          <span>${formatNum(vatPrice)}</span>
        </li>

        <li className={classes["grand-total"]}>
          <p>Grand Total</p>
          <span>${formatNum(grandTotal)}</span>
        </li>
      </ul>
    </div>
  );
}

export default Prices;
