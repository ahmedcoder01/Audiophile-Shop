import React from "react";
import Container from "../../../UI/Container";
import classes from "./ProductSpecs.module.scss";
import Title from "../../../UI/Title/Title";
import Text from "../../../UI/Text/Text";
import QuantityList from "../../../QuantityList/QuantityList";

function ProductSpecs({ features, inBox }) {
  return (
    <div className={classes["product__specs"]}>
      <Container className={classes["product__specs__container"]}>
        <div className={classes["product__specs__features"]}>
          <Title size="h3" weight="w700">
            FEATURES
          </Title>
          <Text
            className={classes["product__specs__features__text"]}
            color="gray"
          >
            {features}
          </Text>
        </div>

        <div className={classes["product__specs__inbox"]}>
          <Title size="h3" weight="w700">
            IN THE BOX
          </Title>
          <QuantityList quantities={inBox} />
        </div>
      </Container>
    </div>
  );
}

export default ProductSpecs;
