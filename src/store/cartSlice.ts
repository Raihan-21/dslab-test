import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  totalItem: number;
  items: any[];
} = {
  totalItem: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    reduceTotalItem(state, action) {
      state.totalItem -= action.payload;
    },
    addTotalItem(state, action) {
      state.totalItem += action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    updateItem(state, action) {},
  },
});

export const { addTotalItem, reduceTotalItem, addItem } = cartSlice.actions;

export default cartSlice.reducer;
