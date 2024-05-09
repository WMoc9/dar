import React from "react";
import classes from "./FilterInput.module.css";
import FilterDifficulty from "./FilterDifficulty/FilterDifficulty";
import FilterSelect from "./FilterSelect/FilterSelect";

const FilterInput = () => {
  return (
    <div className={classes.input__container}>
      <FilterSelect title={"Кухня:"} />
      {/* options={[
          "Все страны и регионы",
          "Italian",
          "Asian",
          "Mexican",
          "American",
          "Pacistani",
          "Mediterranean",
          "Japanese",
          "Korean",
          "Geek",
          "Indian",
          "Turkish",
          "Thai",
          "Smoothie",
          "Russian",
          "Lebanese",
          "Brazilian",
          "Spanish",
          "Vietnamese",
          "Moroccan",
          "Cocktail",
          "Hawaiian",
        ]} */}
      <FilterSelect title={"Тип блюда:"} />
      {/* options={[
          "Все типы",
          "Dinner",
          "Lunch",
          "Snack",
          "Dessert",
          "Side Dish",
          "Appetizer",
          "Snacks",
          "Breakfast",
          "Beverage",
        ]} */}
      <FilterDifficulty />
      <button className={classes.input__btn}>Сбросить все фильтры</button>
    </div>
  );
};

export default FilterInput;
