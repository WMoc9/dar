import React from "react";
import classes from "./FilterSelect.module.css";
import FilterInputTitle from "../../../../../UI/FilterInputTitle/FilterInputTitle";
import AntdSelect from "../../../../../UI/Select/AntdSelect";

const FilterSelect = ({ title, options, filterType }) => {
  return (
    <div className={classes.dropDown__container}>
      <FilterInputTitle title={title} />
      <AntdSelect options={options} filterType={filterType} />
    </div>
  );
};

export default FilterSelect;
