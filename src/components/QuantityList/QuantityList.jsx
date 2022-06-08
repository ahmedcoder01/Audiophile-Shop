import React from "react";
import classes from "./QuantityList.module.scss";

function QuantityList({ quantities }) {
  return (
    <ul className={classes["quantities"]}>
      {React.Children.toArray(
        quantities.map(({ quantity, item }) => (
          <li className={classes["quantities__item"]}>
            <span>{quantity}x</span>
            {item}
          </li>
        ))
      )}
    </ul>
  );
}

export default QuantityList;
