import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isLoggedIn: false,
    profile: {},
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { setProfile, setIsLoggedIn } = profileSlice.actions;

export default profileSlice.reducer;
