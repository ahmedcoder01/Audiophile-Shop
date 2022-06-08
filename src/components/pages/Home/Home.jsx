import React, { memo } from "react";
import Landing from "./Landing";
import SectionOptions from "../../SectionOptions/SectionOptions";
import Brief from "../../Brief/Brief";
import BigProduct from "../../ProductDesigns/BigProduct/BigProduct";
import MediumProduct from "../../ProductDesigns/MediumProduct/MediumProduct";
import SplittedProduct from "../../ProductDesigns/SplittedProduct/SplittedProduct";

function Home() {
  return (
    <>
      <Landing />
      <SectionOptions />
      <BigProduct />
      <MediumProduct />
      <SplittedProduct />
      <Brief />
    </>
  );
}

export default memo(Home);
