import React from "react";
import { Field, useField } from "formik";
import classes from "./Payment.module.scss";
import Input from "../Input";
import CashIcon from "../../../../../assets/images/checkout/icon-cash-on-delivery.svg";
import Text from "../../../../UI/Text/Text";

function Payment() {
  const [{ value }] = useField("payment");

  const cashContent = (
    <div className={classes["payment__cash"]}>
      <img src={CashIcon} alt="cash" />
      <Text color="gray" className={classes.payment__cash__text}>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </Text>
    </div>
  );

  const emoneyContent = (
    <div className={classes["payment__emoney"]}>
      <Input
        name="eMoneyNumber"
        placeholder="238521993"
        label="e-Money Number"
      />
      <Input name="eMoneyPIN" placeholder="238521993" label="e-Money PIN" />
    </div>
  );

  return (
    <div className={classes.payment}>
      <div className={classes.payment__radio}>
        <p>Payment Method</p>

        <div className={classes["payment__radio-inputs"]}>
          <label className={classes["payment__radio-input"]}>
            <Field name="payment" type="radio" value="emoney" id="emoney" />
            <span htmlFor="emoney">e-Money</span>
          </label>

          <label className={classes["payment__radio-input"]}>
            <Field name="payment" type="radio" value="cash" id="cash" />

            <span htmlFor="cash">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {value === "emoney" ? emoneyContent : cashContent}
    </div>
  );
}

export default Payment;
