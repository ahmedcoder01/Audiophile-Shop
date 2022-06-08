import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  vat: 0,
  shipping: 50,
  changed: false,
};

// example of cart item data
// {id: '', quantity: 1, price: 10, totalPrice: 10, cartImage: 'path'}

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem,
    removeItem,
    resetCart,
    replaceCart,
  },
});

function addItem(state, actions) {
  state.changed = true;
  const { shortName, price, cartImage, id, quantity } = actions.payload;

  let itemsState = state.items;

  let isExistingIndex = itemsState.findIndex((i) => i.id === id);
  let isExisting = itemsState[isExistingIndex];

  // adding static changes that won't be affected by duplication
  //TODO: as an idea I think it is more reliable to count this manually while the user is checking out

  state.totalPrice += price * quantity;
  state.totalQuantity += quantity;
  state.vat += +(state.totalPrice * 0.2).toFixed(2);

  //handling duplication
  if (isExisting) {
    //incrementing quantity
    isExisting.quantity += quantity;
    // recalculating total price
    isExisting.totalPrice = isExisting.quantity * isExisting.price;
    return;
  }

  const finalData = {
    shortName,
    price,
    cartImage,
    id,
    quantity,
    totalPrice: price * quantity,
  };

  itemsState.push(finalData);
}

function removeItem(state, actions) {
  state.changed = true;
  const id = actions.payload;

  let itemsState = state.items;

  // let isExistingIndex = itemsState.findIndex((i) => i.id === id);
  // let isExisting = itemsState[isExistingIndex];
  let matchedItemIndex = itemsState.findIndex((i) => i.id === id);
  let matchedItem = itemsState[matchedItemIndex];

  // static changes that won't be affected by duplication
  //TODO: as an idea I think it is more reliable to count this manually while the user is checking out
  state.totalPrice -= matchedItem.price;
  state.totalQuantity -= 1;
  state.vat += +(state.totalPrice * 0.2).toFixed(2);

  // removing items if there was only one avilable before running this function
  if (matchedItem?.quantity === 1) {
    //removing by filtering out the item with specific id
    state.items = itemsState.filter((i) => i.id !== id);
    return;
  }

  matchedItem.quantity -= 1;
  matchedItem.totalPrice = matchedItem.quantity * matchedItem.price;
}

function resetCart(state, actions) {
  state.changed = true;
  let initialCart = { ...initialState, changed: true };
  return initialCart;
}

function replaceCart(state, action) {
  let newCart = action.payload;

  return newCart;
}

export default cartSlice.actions;
export const cartReducer = cartSlice.reducer;

/* TODO

[1] setup cart
-updating database on every change with the action creators

[2] creating cart components (Popup and checkout page)

[3] setup real checkout

[4] performance optimization

[5] animation with framer-motion

 */
