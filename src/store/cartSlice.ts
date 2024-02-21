import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItem: 0,
  },
  reducers: {
    addTotalItem(state, action) {
      state.totalItem += action.payload;
    },
  },
});

export const { addTotalItem } = cartSlice.actions;

export default cartSlice.reducer;
