import React from "react";
import Container from "../../UI/Container";
import Button from "../../UI/Button/Button";
import Text from "../../UI/Text/Text";
import Title from "../../UI/Title/Title";
import AnimatedDiv from "../../UI/Animations/AnimatedDiv";
import classes from "./Landing.module.scss";

function Landing() {
  return (
    <section className={classes.landing}>
      <Container>
        <AnimatedDiv animationTime="2" className={classes["landing__content"]}>
          <Text type="splitted">New Product</Text>

          <Title size="h1" color="white" weight="w700">
            XX99 MARK II HEADPHONES
          </Title>

          <Text type="text" className={classes.p}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Button type="orange" link={"/headphones/xx99-mark-two-headphones"}>
            See Product
          </Button>
        </AnimatedDiv>
      </Container>
    </section>
  );
}

export default Landing;

//768
// 992
//1200
