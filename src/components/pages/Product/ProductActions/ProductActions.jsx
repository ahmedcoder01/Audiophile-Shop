import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./ProductActions.module.scss";
import Button from "../../../UI/Button/Button";
import Counter from "../../../Counter/Counter";
import useUser from "../../../../hooks/useUser";
import SigninModal from "../../../UI/Modals/SigninModal";
import { cartActions } from "../../../../store/allActions";
import { useDispatch } from "react-redux";
import useSendNotification from "../../../../hooks/useSendNotification";

function ProductActions({ productCartData: itemData }) {
  console.log(itemData);
  const notify = useSendNotification();
  const dispatch = useDispatch();
  const user = useUser();
  const [quantity, setQuantity] = useState(1);
  const [authModal, setAuthModal] = useState(false);
  // adding the quantity state prop to the data
  const cartItem = { ...itemData, quantity };

  function clickHandler(e) {
    // no auth actions
    if (!user) {
      setAuthModal(true);
      return;
    }
    // adding to cart
    //* NOTE: the cart state is going to change first, then the HTTP request will be sent after
    dispatch(cartActions.addItem(cartItem));
    notify({
      message: `Item "${itemData.shortName}" was added to cart!`,
      status: "success",
    });
    //resetting the quantity state
    setQuantity(1);
  }

  return (
    <div className={classes.product__actions}>
      <Counter quantity={quantity} setQuantity={setQuantity} />

      <Button type="orange" clickEvent={clickHandler}>
        Add To Cart
      </Button>
      {authModal &&
        ReactDOM.createPortal(
          <SigninModal hide={setAuthModal} />,
          document.getElementById("popups")
        )}
    </div>
  );
}

export default ProductActions;
