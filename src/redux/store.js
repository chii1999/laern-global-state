import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = {
  products: productReducer,
  carts: cartReducer
};

export default configureStore({
  reducer: rootReducer
});
