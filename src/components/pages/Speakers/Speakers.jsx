import React from "react";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import ProductsHolder from "../../UI/ProductsHolder/ProductsHolder";
import CategoryProduct from "../../ProductDesigns/CategoryProduct/CategoryProduct";
import SectionOptions from "../../SectionOptions/SectionOptions";
import Brief from "../../Brief/Brief";

function Speakers() {
  const speakersProducts = useSelector((state) => state.products.speakers);

  return (
    <>
      <SectionTitle>Earphones</SectionTitle>
      <ProductsHolder>
        {speakersProducts.map((product) => (
          <CategoryProduct productData={product} key={product.id} />
        ))}
      </ProductsHolder>
      <SectionOptions />
      <Brief />
    </>
  );
}

export default Speakers;
