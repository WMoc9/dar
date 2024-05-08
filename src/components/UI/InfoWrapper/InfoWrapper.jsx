import React from "react";
import classes from "./InfoWrapper.module.css";

const InfoWrapper = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default InfoWrapper;
