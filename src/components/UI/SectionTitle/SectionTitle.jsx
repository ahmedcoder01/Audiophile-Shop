import React from "react";
import classes from "./SectionTitle.module.scss";

function SectionTitle({ children }) {
  return (
    <div className={classes["section-title"]}>
      <h2>{children}</h2>
    </div>
  );
}

export default SectionTitle;
