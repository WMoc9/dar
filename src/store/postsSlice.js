import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    totalPosts: 0,
  },
  reducers: {
    changeTotalPosts: (state, action) => {
      state.totalPosts = action.payload;
    },
  },
});

export const { changeTotalPosts } = postsSlice.actions;

export default postsSlice.reducer;
