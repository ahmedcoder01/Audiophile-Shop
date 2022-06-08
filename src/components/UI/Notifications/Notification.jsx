import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/allActions";
import classes from "./Notification.module.scss";
import Checkmark from "../../../assets/images/shared/desktop/icon-check-mark.svg";
import CloseIcon from "../../../assets/images/shared/tablet/icon-close-menu.svg";

function Notification({ message, status, id }) {
  const dispatch = useDispatch();
  let success = status === "success";

  const CircledCheckmark = (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        fill="currentColor"
        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
      ></path>
    </svg>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(uiActions.deleteNotification(id));
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, id]);

  function clickHandler(e) {
    dispatch(uiActions.deleteNotification(id));
  }

  return (
    <div className={`${classes.notification} ${classes[status]}`}>
      {success ? CircledCheckmark : ""}
      <p>{message}</p>
      <button
        onClick={clickHandler}
        className={classes["notification__close-btn"]}
      >
        x
      </button>
    </div>
  );
}

export default Notification;
