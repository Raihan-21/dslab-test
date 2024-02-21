import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      img: "/sepatu-1.png",
      title: "Onitsuka Tiger White",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat eros, scelerisque nec massa vitae, interdum malesuada orci. Aenean dolor nisi, fermentum sit amet gravida ut, sollicitudin vel nisl. Nullam aliquet ipsum sit amet venenatis porta. Quisque metus sem, mollis id tellus at, lobortis pretium nulla. Curabitur pretium magna orci, at aliquet urna venenatis a. Cras leo felis, consectetur et nibh at, aliquam elementum erat. Integer commodo orci quis vehicula dignissim. Sed vel suscipit lectus. Fusce facilisis eros eu ex dapibus mattis.",
      price: 300000,
    },
    {
      id: 2,
      img: "/sepatu-1.png",
      title: "Onitsuka Tiger White",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat eros, scelerisque nec massa vitae, interdum malesuada orci. Aenean dolor nisi, fermentum sit amet gravida ut, sollicitudin vel nisl. Nullam aliquet ipsum sit amet venenatis porta. Quisque metus sem, mollis id tellus at, lobortis pretium nulla. Curabitur pretium magna orci, at aliquet urna venenatis a. Cras leo felis, consectetur et nibh at, aliquam elementum erat. Integer commodo orci quis vehicula dignissim. Sed vel suscipit lectus. Fusce facilisis eros eu ex dapibus mattis.",
      price: 300000,
    },
    {
      id: 3,
      img: "/sepatu-1.png",
      title: "Onitsuka Tiger White",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat eros, scelerisque nec massa vitae, interdum malesuada orci. Aenean dolor nisi, fermentum sit amet gravida ut, sollicitudin vel nisl. Nullam aliquet ipsum sit amet venenatis porta. Quisque metus sem, mollis id tellus at, lobortis pretium nulla. Curabitur pretium magna orci, at aliquet urna venenatis a. Cras leo felis, consectetur et nibh at, aliquam elementum erat. Integer commodo orci quis vehicula dignissim. Sed vel suscipit lectus. Fusce facilisis eros eu ex dapibus mattis.",
      price: 300000,
    },
  ],
  reducers: {},
});

export default productReducer.reducer;
