import React, { memo } from "react";
import classes from "./BigProduct.module.scss";
import Container from "../../UI/Container";
import Text from "../../UI/Text/Text";
import Title from "../../UI/Title/Title";
import Picture from "../../UI/Picture/Picture";
import AnimatedDiv from "../../UI/Animations/AnimatedDiv";

import LgProduct from "../../../assets/images/home/desktop/image-speaker-zx9.png";
import MdProduct from "../../../assets/images/home/tablet/image-speaker-zx9.png";
import SmProduct from "../../../assets/images/home/mobile/image-speaker-zx9.png";
import Button from "../../UI/Button/Button";

function BigProduct() {
  return (
    <AnimatedDiv className={classes["big-product"]} >
      <Container className={classes.container}>
        <div className={classes.wrapper}>
          <Picture
            sources={{
              mobile: SmProduct,
              tablet: MdProduct,
              desktop: LgProduct,
            }}
            className={classes.picture}
          />

          <div className={classes["product__content"]}>
            <Title color="white" size="h1" weight="w600">
              ZX9 SPEAKER
            </Title>

            <Text>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Text>

            <Button link="/speakers/zx9-speaker" type="black">
              See Product
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedDiv>
  );
}

export default memo(BigProduct);
