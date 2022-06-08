import React, { useEffect } from "react";
import useProduct from "../../../hooks/useProduct";
import Brief from "../../Brief/Brief";
import SectionOptions from "../../SectionOptions/SectionOptions";
import GoBack from "../../UI/GoBack/GoBack";
import classes from "./Product.module.scss";

import ProductSpecs from "./ProductSpecs/ProductSpecs";
import ProductGallery from "./ProductGallery/ProductGallery";
import Suggestions from "./Suggestions/Suggestions";
import ProductDetails from "./ProductDetails/ProductDetails";

function Product() {
  // hook that fetches the product matching the url slug
  const productData = useProduct();
  const {
    features,
    includedItems,
    others: suggestions,
    gallery: {
      first: firstGallery,
      second: secondGallery,
      third: thirdGallery,
    },
  } = productData;

  //* scrolling to top whenever the product change for better UX
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, [productData]);

  return (
    <div className={classes.product}>
      <GoBack />

      {/* will pass all data to ProductDetails */}
      <ProductDetails productData={productData} />

      <ProductSpecs features={features} inBox={includedItems} />

      <ProductGallery
        first={firstGallery}
        second={secondGallery}
        third={thirdGallery}
      />

      <Suggestions suggestions={suggestions} />

      <SectionOptions />
      <Brief />
    </div>
  );
}

export default Product;
