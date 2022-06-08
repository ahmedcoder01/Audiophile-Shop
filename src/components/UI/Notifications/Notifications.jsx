import React from "react";
import Notification from "./Notification";
import classes from "./Notifications.module.scss";

function Notifications({ notifications }) {
  console.log(notifications);
  return (
    <div className={classes["notifications"]}>
      {React.Children.toArray(
        notifications.map((notification) => <Notification {...notification} />)
      )}
    </div>
  );
}

export default Notifications;
