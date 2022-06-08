import React, { memo } from "react";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import classes from "./MediumProduct.module.scss";
import Container from "../../UI/Container";
import AnimatedDiv from "../../UI/Animations/AnimatedDiv";

function MediumProduct() {
  return (
    <AnimatedDiv className={classes["medium-product"]}>
      <Container className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes["content"]}>
            <Title size="h3">ZX7 SPEAKER</Title>
            <Button type="transparent" link={"/speakers/zx7-speaker"}>
              See Product
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedDiv>
  );
}

export default memo(MediumProduct);
