import React from "react";
import classes from "./ProductsHolder.module.scss";

function ProductsHolder({ children }) {
  return <div className={classes["products-holder"]}>{children}</div>;
}

export default ProductsHolder;
