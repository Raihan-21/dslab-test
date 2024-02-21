import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 1,
      nama: "User",
      email: "user@gmail.com",
      password: "test123",
    },
  ],
  reducers: {
    // findUser(state, action) {
    //   const payload = action.payload;
    //   const matchedUser = state.find(
    //     (data) =>
    //       data.email === payload.email && data.password === payload.password
    //   );
    //   return matchedUser;
    // },
  },
});

export default usersSlice.reducer;
