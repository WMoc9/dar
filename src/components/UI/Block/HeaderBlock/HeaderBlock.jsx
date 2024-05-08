import React from "react";
import classes from "./HeaderBlock.module.css";

const HeaderBlock = ({ title }) => {
  return (
    <div className={classes.headerBlock__container}>
      <h3 className={classes.header__title}>{title}</h3>
    </div>
  );
};

export default HeaderBlock;
