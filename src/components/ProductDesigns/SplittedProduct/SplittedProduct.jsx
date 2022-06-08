import React, { memo } from "react";
import classes from "./SplittedProduct.module.scss";
import Container from "../../UI/Container";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import AnimatedDiv from "../../UI/Animations/AnimatedDiv";
import Picture from "../../UI/Picture/Picture";
import LgEarphones from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";
import MdEarphones from "../../../assets/images/home/tablet/image-earphones-yx1.jpg";
import SmEarphones from "../../../assets/images/home/mobile/image-earphones-yx1.jpg";

function SplittedProduct() {
  return (
    <AnimatedDiv className={classes["splitted-product"]}>
      <Container className={classes.container}>
        <Picture
          className={classes.picture}
          sources={{
            mobile: SmEarphones,
            tablet: MdEarphones,
            desktop: LgEarphones,
          }}
        />

        <div className={classes.content}>
          <Title size="h3">YX1 EARPHONES</Title>
          <Button link="/earphones/yx1-earphones" type="transparent">
            See Product
          </Button>
        </div>
      </Container>
    </AnimatedDiv>
  );
}

export default memo(SplittedProduct);
