import React from "react";
import classes from "./Brief.module.scss";
import Title from "../UI/Title/Title";
import Text from "../UI/Text/Text";
import LgHeadGear from "../../assets/images/shared/desktop/image-best-gear.jpg";
import MdHeadGear from "../../assets/images/shared/tablet/image-best-gear.jpg";
import SmHeadGear from "../../assets/images/shared/mobile/image-best-gear.jpg";
import Container from "../UI/Container";
import Picture from "../UI/Picture/Picture";
import AnimatedDiv from "../UI/Animations/AnimatedDiv";

function Brief() {
  return (
    <AnimatedDiv className={classes.brief}>
      <Container className={classes.container}>
        <div className={classes["brief__content"]}>
          <Title size="h2" weight="w700">
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </Title>

          <Text color="gray">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </div>

        <Picture
          sources={{
            mobile: SmHeadGear,
            tablet: MdHeadGear,
            desktop: LgHeadGear,
          }}
        />
      </Container>
    </AnimatedDiv>
  );
}

export default Brief;
