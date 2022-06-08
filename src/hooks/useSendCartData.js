import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

let initial = true;
function useSendCartData() {
  const [userID, setUserID] = useState();
  let user = useSelector((state) => state.auth.user);
  let cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (user?.uid) {
      setUserID(user?.uid);
    }
  }, [user]);

  useEffect(() => {
    if (initial || !userID) {
      initial = false;
      return;
    }

    // checking changed state item
    /*
        purpose of changed state is to avoid sending empty cart when loading the app 
        as the userID will change; therfore this function will run which is something we want
        to avoid
    */
    if (cart?.changed) {
      send();
    }

    async function send() {
      let docRef = doc(db, "cartItems", userID);
      await setDoc(docRef, cart);
    }
  }, [cart, userID]);
}

export default useSendCartData;
