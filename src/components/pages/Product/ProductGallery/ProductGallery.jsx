import React from "react";
import Picture from "../../../UI/Picture/Picture";
import classes from "./ProductGallery.module.scss";
import Container from "../../../UI/Container";

function ProductGallery({ first, second, third }) {
  return (
    <div className={classes.gallery}>
      <Container className={classes.gallery__container}>
        <Picture sources={first} />
        <Picture sources={second} />
        <Picture sources={third} />
      </Container>
    </div>
  );
}

export default ProductGallery;
