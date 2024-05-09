import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    country: "*",
    typeMeal: "*",
    difficulty: "any",
    filtersReset: false,
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
      state.filtersReset = false;
    },
    changeTypeMeal: (state, action) => {
      state.typeMeal = action.payload;
      state.filtersReset = false;
    },
    changeDifficulty: (state, action) => {
      state.difficulty = action.payload;
      state.filtersReset = false;
      console.log(state.difficulty);
    },
    resetFilters: (state) => {
      state.country = "*";
      state.typeMeal = "*";
      state.difficulty = "any";
      state.filtersReset = true;
    },
  },
});

export const { changeCountry, changeTypeMeal, changeDifficulty, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
