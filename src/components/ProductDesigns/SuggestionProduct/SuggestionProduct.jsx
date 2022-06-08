import React, { memo } from "react";
import classes from "./SuggestionProduct.module.scss";
import Picture from "../../UI/Picture/Picture";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";

function SuggestionProduct({ productData }) {
  const { image, name, slug } = productData;

  return (
    <div className={classes["suggestion-product"]}>
      <Picture sources={image} />
      <Title size="h3">{name}</Title>
      <Button link={`/${slug}`} type="orange">
        See Product
      </Button>
    </div>
  );
}

export default memo(SuggestionProduct);

// place suggestions from that data
// continue product page
