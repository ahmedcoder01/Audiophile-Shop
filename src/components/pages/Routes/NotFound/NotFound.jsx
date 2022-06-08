import React from "react";
import Button from "../../../UI/Button/Button";
import Title from "../../../UI/Title/Title";
import classes from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={classes["not-found"]}>
      <div className={classes["not-found__holder"]}>
        <Title size="h2">Page Not Found</Title>
        <Button type="black" link="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
