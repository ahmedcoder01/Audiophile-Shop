import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import CartPopup from "../Cart/CartPopup/CartPopup";
import CartButton from "../Cart/CartButton/CartButton";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice/authActions";
import Button from "../UI/Button/Button";
import useSendNotification from "../../hooks/useSendNotification";

function AuthActions() {
  const cartActive = useSelector((state) => state.ui.cartActive);
  const dispatch = useDispatch();
  const notify = useSendNotification();

  const centered = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  function clickHandler(e) {
    dispatch(logout());
    notify({ message: "Logged out successfully", status: "success" });
  }

  return (
    <div style={centered}>
      <CartButton />
      <Button type="transparent-white" clickEvent={clickHandler} size="small">
        Logout
      </Button>
      {cartActive &&
        ReactDOM.createPortal(<CartPopup />, document.getElementById("popups"))}
    </div>
  );
}

export default AuthActions;
