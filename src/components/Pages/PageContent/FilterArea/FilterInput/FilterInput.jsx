import React from "react";
import classes from "./FilterInput.module.css";
import FilterDifficulty from "./FilterDifficulty/FilterDifficulty";
import FilterSelect from "./FilterSelect/FilterSelect";
import { kitchenOption, mealOptions } from "./FilterSelect/FilterOptions";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../../../../store/filterSlice";

const FilterInput = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.input__container}>
      <FilterSelect
        title={"Кухня:"}
        options={kitchenOption}
        filterType={"country"}
      />
      <FilterSelect
        title={"Тип блюда:"}
        options={mealOptions}
        filterType={"typeMeal"}
      />
      <FilterDifficulty />
      <button
        onClick={() => dispatch(resetFilters())}
        className={classes.input__btn}
      >
        Сбросить все фильтры
      </button>
    </div>
  );
};

export default FilterInput;
