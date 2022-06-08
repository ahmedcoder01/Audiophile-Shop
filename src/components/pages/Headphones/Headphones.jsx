import React, { useEffect } from "react";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import CategoryProduct from "../../ProductDesigns/CategoryProduct/CategoryProduct";
import { useSelector } from "react-redux";
import ProductsHolder from "../../UI/ProductsHolder/ProductsHolder";
import SectionOptions from "../../SectionOptions/SectionOptions";
import Brief from "../../Brief/Brief";

function Headphones() {
  const headphonesProducts = useSelector((state) => state.products.headphones);

  return (
    <>
      <SectionTitle>Headphones</SectionTitle>
      <ProductsHolder>
        {headphonesProducts.map((product) => (
          <CategoryProduct productData={product} key={product.id} />
        ))}
      </ProductsHolder>
      <SectionOptions />
      <Brief />
    </>
  );
}

export default Headphones;
