import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";

export default configureStore({
  reducer: {
    page: pageSlice,
  },
});
