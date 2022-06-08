import React from "react";
import ModalBody from "../../UI/Modals/ModalBody/ModalBody";
import { useDispatch } from "react-redux";
import { uiActions, cartActions } from "../../../store/allActions";
import { useSelector } from "react-redux";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import classes from "./CartPopup.module.scss";
import Button from "../../UI/Button/Button";
import CartItems from "./CartItems";
import EmptyCartIcon from "../../../assets/images/cart/empty-cart.png";
import { formatNum } from "../../../utils";
import useSendNotification from "../../../hooks/useSendNotification";

function CartPopup() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const notify = useSendNotification();

  function deleteAllHandler() {
    dispatch(cartActions.resetCart());
    notify({ message: "All cart items were removed", status: "success" });
  }

  function hide() {
    dispatch(uiActions.setCartActive());
  }

  let cartContent = (
    <ModalBody hide={hide} type="cart-modal" className={classes.modal}>
      <div className={classes.cart__header}>
        <Title size="h4">Cart ({quantity})</Title>

        <button onClick={deleteAllHandler}>Remove All</button>
      </div>

      <CartItems items={cartItems} />

      <div className={classes.cart__footer}>
        <div className={classes.cart__footer__price__holder}>
          <h3>Total</h3>
          <p>${formatNum(cartTotalPrice)}</p>
        </div>
        {/* Optionally show checkout if the cart is not empty */}
        {cartItems.length !== 0 && (
          <Button type="orange" link="/checkout">
            Checkout
          </Button>
        )}
      </div>
    </ModalBody>
  );

  if (cartItems.length === 0) {
    cartContent = (
      <ModalBody hide={hide} type="cart-modal" className={classes.modal}>
        <Text className={classes["empty-cart-p"]} color="gray">
          Your Cart is empty
        </Text>
        <img
          className={classes["empty-cart-icon"]}
          src={EmptyCartIcon}
          alt="cart icon"
        />
      </ModalBody>
    );
  }

  return <>{cartContent}</>;
}

export default CartPopup;
