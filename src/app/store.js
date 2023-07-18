import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/productSlice";
import cartReducer from "../features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});
