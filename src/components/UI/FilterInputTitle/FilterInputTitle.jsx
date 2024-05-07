import React from "react";
import classes from "./FilterInputTitle.module.css";

const FilterInputTitle = ({ title }) => {
  return <h2 className={classes.dropDown__title}>{title}</h2>;
};

export default FilterInputTitle;
