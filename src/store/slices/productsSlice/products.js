import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data/products.json";
import { filterProducts } from "../../../utils";

const { products: productsData } = data;

const headphones = filterProducts("headphones", productsData);
const earphones = filterProducts("earphones", productsData);
const speakers = filterProducts("speakers", productsData);

const initialState = {
  allProducts: productsData,
  headphones,
  earphones,
  speakers,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    get() {},
  },
});

const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
export default productsActions;
