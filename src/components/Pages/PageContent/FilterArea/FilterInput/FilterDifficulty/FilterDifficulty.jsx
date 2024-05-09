import React, { useState } from "react";
import FilterInputTitle from "../../../../../UI/FilterInputTitle/FilterInputTitle";
import CustoButton from "../../../../../UI/Buttons/CustoButton";
import classes from "./FilterDifficulty.module.css";

const FilterDifficulty = () => {
  const [buttonTypes, setButtonTypes] = useState({
    any: true,
    low: false,
    medium: false,
    high: false,
  });

  const handleButtonClick = (type) => {
    setButtonTypes((prevButtonTypes) => ({
      any: false,
      low: false,
      medium: false,
      high: false,
      [type]: true,
    }));
  };

  return (
    <div className={classes.difficult__container}>
      <FilterInputTitle title={"Сложность приготовления:"} />
      <div className={classes.btn__container}>
        <CustoButton
          type={buttonTypes.any ? "primary" : ""}
          title={"Любая"}
          onClick={() => handleButtonClick("any")}
        />
        <CustoButton
          type={buttonTypes.low ? "primary" : ""}
          title={"Низкая"}
          onClick={() => handleButtonClick("low")}
        />
        <CustoButton
          type={buttonTypes.medium ? "primary" : ""}
          title={"Средняя"}
          onClick={() => handleButtonClick("medium")}
        />
        <CustoButton
          type={buttonTypes.high ? "primary" : ""}
          title={"Высокая"}
          onClick={() => handleButtonClick("high")}
        />
      </div>
    </div>
  );
};

export default FilterDifficulty;
