import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import profileSlice from "./profileSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
    cart: cartSlice,
    users: usersSlice,
  },
});

export default store;
