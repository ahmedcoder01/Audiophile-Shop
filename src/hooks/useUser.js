import React from "react";
import { useSelector } from "react-redux";

function useUser() {
  let user = useSelector((state) => state.auth.user);

  return user;
}

export default useUser;
