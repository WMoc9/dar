import React from "react";
import FilterContent from "./FilterContent/FilterContent";
import classes from "./FilterArea.module.css";
import FilterInput from "./FilterInput/FilterInput";
import FilterAdditional from "./FilterAdditional/FilterAdditional";

const FilterArea = () => {
  return (
    <div className={classes.filterArea__container}>
      <FilterContent />
      <FilterInput />
      <FilterAdditional />
    </div>
  );
};

export default FilterArea;
