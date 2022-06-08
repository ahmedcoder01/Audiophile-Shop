import React from "react";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import ProductsHolder from "../../UI/ProductsHolder/ProductsHolder";
import CategoryProduct from "../../ProductDesigns/CategoryProduct/CategoryProduct";
import SectionOptions from "../../SectionOptions/SectionOptions";
import Brief from "../../Brief/Brief";

function Earphones() {
  const earphonesProducts = useSelector((state) => state.products.earphones);

  return (
    <>
      <SectionTitle>Earphones</SectionTitle>
      <ProductsHolder>
        {earphonesProducts.map((product) => (
          <CategoryProduct productData={product} key={product.id} />
        ))}
      </ProductsHolder>
      <SectionOptions />
      <Brief />
    </>
  );
}

export default Earphones;
