import React from "react";
import Input from "./Input";
import classes from "./FormInputs.module.scss";
import Title from "../../../UI/Title/Title";
import Payment from "./Payment/Payment";

const billingInputs = [
  { placeholder: "Alexei Ward", name: "name", label: "Name" },
  { placeholder: "alexei@gmail.com", name: "email", label: "Email Address" },
  { placeholder: "+1 202-555-0136", name: "phone", label: "Phone Number" },
];
const shippingInfoInputs = [
  {
    placeholder: "1137 Williams Avenue",
    name: "address",
    label: "Your Address",
    fullWidth: true,
  },
  { placeholder: "10001", name: "zip", label: "ZIP Code" },
  { placeholder: "New York", name: "city", label: "City" },
  { placeholder: "United States", name: "country", label: "Country" },
];

function FormInputs({ className }) {
  return (
    <div className={`${classes.inputs} ${className}`}>
      <Title size="h3">Checkout</Title>

      <h3>BILLING DETAILS</h3>
      <div className={classes.inputs__billing}>
        {React.Children.toArray(
          billingInputs.map((input) => <Input {...input} />)
        )}
      </div>

      <h3>SHIPPING INFO</h3>
      <div className={classes["inputs__shipping-info"]}>
        {React.Children.toArray(
          shippingInfoInputs.map((input) => <Input {...input} />)
        )}
      </div>

      <h3>PAYMENT DETAILS</h3>
      <Payment />
    </div>
  );
}

export default FormInputs;
