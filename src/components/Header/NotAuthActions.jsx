import React from "react";
import Button from "../UI/Button/Button";

const styles = {
  holder: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "20px",
  },
};

function NotAuthActions() {
  return (
    <div style={styles.holder}>
      <Button type="transparent-white" link="/signin" size="small">
        Signin
      </Button>
      <Button type="orange" link="/signup" size="small">
        Signup
      </Button>
    </div>
  );
}

export default NotAuthActions;
