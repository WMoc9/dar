import React from "react";
import classes from "./DropDown.module.css";
import DropDownItem from "../../../../../UI/DropDown/DropDownItem";
import FilterInputTitle from "../../../../../UI/FilterInputTitle/FilterInputTitle";

const DropDown = ({ title, dropTitle, options }) => {
  return (
    <div className={classes.dropDown__container}>
      <FilterInputTitle title={title} />
      <DropDownItem title={title} dropTitle={dropTitle} />
    </div>
  );
};

export default DropDown;
