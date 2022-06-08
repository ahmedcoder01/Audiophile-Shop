import React, { Component, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Headphones from "./components/pages/Headphones/Headphones";
import Speakers from "./components/pages/Speakers/Speakers";
import Earphones from "./components/pages/Earphones/Earphones";
import Product from "./components/pages/Product/Product";
import { auth } from "./firebase";
import Signin from "./components/pages/Auth/Signin/Signin";
import Signup from "./components/pages/Auth/Signup/Signup";
import Checkout from "./components/pages/Checkout/Checkout";
import { authActions, uiActions } from "./store/allActions";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useSendCartData from "./hooks/useSendCartData";
import NotFound from "./components/pages/Routes/NotFound/NotFound";
import { getCartData } from "./store/slices/cartSlice/cartActions";
import Footer from "./components/Footer/Footer";
import Notifications from "./components/UI/Notifications/Notifications";

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const notifications = useSelector((state) => state.ui.notifications);

  //hook that sends data ehen the cart items change
  useSendCartData();

  useEffect(() => {
    if (user) {
      dispatch(getCartData(user?.uid));
    }
  }, [dispatch, user]);

  //* updating user state with the "onAuthStateChanged" function provided by firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.updateUser(user));
      } else {
        dispatch(authActions.updateUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  //! marking modals state as closed when the path changes to avoid any errors in showing modals
  useEffect(() => {
    dispatch(uiActions.setCartActive(false));
  }, [location, dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Headphones />} path="/headphones" />
        <Route exact element={<Speakers />} path="/speakers" />
        <Route exact element={<Earphones />} path="/earphones" />
        <Route exact element={<Checkout />} path="/checkout" />

        <Route exact path="/headphones/:slug" element={<Product />} />
        <Route exact path="/earphones/:slug" element={<Product />} />
        <Route exact path="/speakers/:slug" element={<Product />} />

        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* // creating a portal for notifications */}
      {notifications.length !== 0 &&
        ReactDOM.createPortal(
          <Notifications notifications={notifications} />,
          document.getElementById("notifications")
        )}
    </>
  );
}

export default App;
