import React from "react";
import FilterInputTitle from "../../../../UI/FilterInputTitle/FilterInputTitle";
import CustoButton from "../../../../UI/Buttons/CustoButton";
import classes from "./FilterDifficulty.module.css";

const FilterDifficulty = () => {
  return (
    <div className={classes.difficult__container}>
      <FilterInputTitle title={"Сложность приготовления:"} />
      <div className={classes.btn__container}>
        <CustoButton type={"primary"} title={"Любая"} />
        <CustoButton title={"Низкая"} />
        <CustoButton title={"Средняя"} />
        <CustoButton title={"Высокая"} />
      </div>
    </div>
  );
};

export default FilterDifficulty;
