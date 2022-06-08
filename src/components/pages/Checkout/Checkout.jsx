import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "../../UI/Container";
import classes from "./Checkout.module.scss";
import Goback from "../../UI/GoBack/GoBack";
import Title from "../../UI/Title/Title";
import { useSelector } from "react-redux";
import CheckoutItems from "./CheckoutItems/CheckoutItems";
import Prices from "./Prices/Prices";
import Button from "../../UI/Button/Button";
import FormInputs from "./FormInputs/FormInputs";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ThanksModal from "./ThanksModal/ThanksModal";

const REGEX = {
  phoneRegExp:
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/gi,
  zipRegExp: /^\d{5}$/gi,
  emoneyNumberRegExp: /^\d+$/gi,
};

function Checkout() {
  const [showThanksModal, setShowThanks] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  function submitHandler(value) {
    //TODO send notification that the form wes submitted
    setShowThanks(true);
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
    payment: "emoney",
  };

  const checkoutSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required Input")
      .min(3, "Name is too short!")
      .max(20, "Name length exceeded"),
    email: Yup.string().required("Required Input").email("Invalid Email"),
    phone: Yup.string()
      .matches(REGEX.phoneRegExp, "Invalid Phone Number")
      .required("Required Input"),
    address: Yup.mixed().required("Required Input"),
    zip: Yup.string()
      .required("Required Input")
      .matches(REGEX.zipRegExp, "Invalid ZIP"),
    city: Yup.string().required("Required Input"),
    country: Yup.string().required("Required Input"),

    //* optionally require validation if emoney is selected
    eMoneyNumber: Yup.string().when("payment", {
      is: "emoney",
      then: (schema) =>
        schema
          .required("Required Input")
          .matches(REGEX.emoneyNumberRegExp, "Numbers Only"),
    }),
    eMoneyPIN: Yup.string().when("payment", {
      is: "emoney",
      then: (schema) =>
        schema
          .required("Required Input")
          .min(4, "Must be 4 chracters at least ")
          .max(12, "Must be 12 chracters at most "),
    }),
  });

  return (
    <div className={classes.checkout}>
      <Container className={classes.container}>
        <Goback />
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={checkoutSchema}
        >
          <Form className={classes["checkout__form"]}>
            <FormInputs className={classes["checkout__form__inputs"]} />

            <div className={classes.checkout__details}>
              <Title size="h4">Summary</Title>
              <CheckoutItems items={cartItems} />
              <Prices />
              <Button type="orange" submit>
                Continue & Pay
              </Button>
            </div>
          </Form>
        </Formik>

        {showThanksModal &&
          ReactDOM.createPortal(
            <ThanksModal />,
            document.getElementById("popups")
          )}
      </Container>
    </div>
  );
}

export default Checkout;
