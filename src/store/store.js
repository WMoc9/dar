import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import filterSlice from "./filterSlice";
import postsSlice from "./postsSlice";

export default configureStore({
  reducer: {
    page: pageSlice,
    filters: filterSlice,
    posts: postsSlice,
  },
});
