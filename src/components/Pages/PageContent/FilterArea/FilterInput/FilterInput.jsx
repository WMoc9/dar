import React from "react";
import classes from "./FilterInput.module.css";
import DropDown from "./FilterDropDown/DropDown";
import FilterDifficulty from "./FilterDifficulty/FilterDifficulty";

const FilterInput = () => {
  return (
    <div className={classes.input__container}>
      <DropDown
        title={"Кухня:"}
        dropTitle={"Все страны и регионы"}
        options={["Россия"]}
      />
      <DropDown
        title={"Тип блюда:"}
        dropTitle={"Все типы"}
        options={["Россия"]}
      />
      <FilterDifficulty />
      <button className={classes.input__btn}>Сбросить все фильтры</button>
    </div>
  );
};

export default FilterInput;
