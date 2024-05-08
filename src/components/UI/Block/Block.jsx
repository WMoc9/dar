import React from "react";
import classes from "./Block.module.css";
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import BodyBlock from "./BodyBlock/BodyBlock";

const Block = ({ title, value, classs, moreInfo }) => {
  return (
    <div className={classes.block__container}>
      <HeaderBlock title={title} />
      <BodyBlock value={value} classs={classs} moreInfo={moreInfo} />
    </div>
  );
};

export default Block;
