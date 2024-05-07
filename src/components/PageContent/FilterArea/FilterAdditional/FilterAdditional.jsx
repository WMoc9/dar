import React from "react";
import classes from "./FilterAdditional.module.css";

const FilterAdditional = () => {
  return (
    <div className={classes.additional__container}>
      <p className={classes.additional__text}>
        А еще можно попробовать на вкус удачу
      </p>
      <button className={classes.additional__btn}>Мне повезет!</button>
    </div>
  );
};

export default FilterAdditional;
