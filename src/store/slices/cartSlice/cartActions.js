import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { cartActions } from "../../allActions";

export function getCartData(userID) {
  return async (dispatch) => {
    const docRef = doc(db, "cartItems", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(cartActions.replaceCart(docSnap.data()));
    }
  };
}
