import React from "react";
import classes from "./ProductDetails.module.scss";
import Picture from "../../../UI/Picture/Picture";
import Text from "../../../UI/Text/Text";
import Title from "../../../UI/Title/Title";
import Container from "../../../UI/Container";
import ProductActions from "../ProductActions/ProductActions";

function ProductDetails({ productData }) {
  const {
    image,
    id,
    name,
    description,
    price,
    new: isNew,
    shortName,
    cartImage,
  } = productData;

  // will add quanity in the ProductActions as it hold the quantity counter state
  const productCartData = { shortName, price, cartImage, id };

  return (
    <div className={classes["product__card"]}>
      <Container className={classes["product__card__container"]}>
        <Picture sources={image} />

        <div className={classes["product__card__details"]}>
          {isNew && (
            <Text type="splitted" color="orange">
              New Product
            </Text>
          )}

          <Title size="h3" color="black">
            {name}
          </Title>

          <Text color="gray">{description}</Text>

          <p className={classes.price}>${price}</p>

          <ProductActions productCartData={productCartData} />
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
