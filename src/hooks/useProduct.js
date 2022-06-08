import React from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../utils";
import { useParams } from "react-router-dom";

function useProduct() {
  const { slug = null } = useParams();
  const products = useSelector((state) => state.products.allProducts);
  let matchingProduct = getProduct(slug, products);

  return matchingProduct ?? null;
}

export default useProduct;
