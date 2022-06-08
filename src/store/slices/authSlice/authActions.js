import { authActions } from "../../allActions";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";

export function signin(email, pass) {
  return async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);

      dispatch(
        authActions.setMessage({
          message: "Signed In Successfully",
          status: "success",
        })
      );
    } catch (err) {
      dispatch(
        authActions.setMessage({
          message: "Invalid Credentials",
          status: "error",
        })
      );
    }
  };
}

export function signup({ email, password, displayName }) {
  return async (dispatch) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = await response.userCredentials;
      await updateProfile(user, { displayName: displayName });

      dispatch(
        authActions.setMessage({
          message: "Created Account Successfully",
          status: "success",
        })
      );
    } catch (err) {
      dispatch(
        authActions.setMessage({
          message: "Couldn't Create Account At The Moment",
          status: "error",
        })
      );
    }
  };
}

export function logout() {
  return async (dispatch) => {
    await signOut(auth);
  };
}
