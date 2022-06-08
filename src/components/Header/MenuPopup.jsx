import React from "react";
import classes from "./MenuPopup.module.scss";
import ModalBody from "../UI/Modals/ModalBody/ModalBody";
import { Link } from "react-router-dom";

function MenuPopup({ hide }) {
  return (
    <ModalBody hide={hide} className={classes["menu-popup"]}>
      <ul className={classes["menu-popup__ul"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>
        </li>
        <li>
          <Link to="/earphones">Earphones</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
      </ul>
    </ModalBody>
  );
}

export default MenuPopup;
