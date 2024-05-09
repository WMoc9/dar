import React, { useEffect, useState } from "react";
import FilterInputTitle from "../../../../../UI/FilterInputTitle/FilterInputTitle";
import CustoButton from "../../../../../UI/Buttons/CustoButton";
import classes from "./FilterDifficulty.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeDifficulty } from "../../../../../../store/filterSlice";

const FilterDifficulty = () => {
  const [selectedButton, setSelectedButton] = useState("any");
  const dispatch = useDispatch();
  const wasReset = useSelector((state) => state.filters.filtersReset);

  useEffect(() => {
    if (wasReset) {
      setSelectedButton("any");
    }
  }, [wasReset]);

  const handleButtonClick = (type) => {
    setSelectedButton(type);
    dispatch(changeDifficulty(type));
  };

  const buttonTypes = {
    any: selectedButton === "any",
    low: selectedButton === "Easy",
    medium: selectedButton === "Medium",
    high: selectedButton === "Hard",
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
          onClick={() => handleButtonClick("Easy")}
        />
        <CustoButton
          type={buttonTypes.medium ? "primary" : ""}
          title={"Средняя"}
          onClick={() => handleButtonClick("Medium")}
        />
        <CustoButton
          type={buttonTypes.high ? "primary" : ""}
          title={"Высокая"}
          onClick={() => handleButtonClick("Hard")}
        />
      </div>
    </div>
  );
};

export default FilterDifficulty;
