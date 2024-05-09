import React from "react";
import classes from "./ContentTitle.module.css";

const ContentTitle = ({ totalRecipes }) => {
  return (
    <div className={classes.title__container}>
      <div className={classes.title__content}>
        <div className={classes.title__name}>Найдено рецептов:</div>
        <div className={classes.title__value}>{totalRecipes}</div>
      </div>
    </div>
  );
};

export default ContentTitle;
