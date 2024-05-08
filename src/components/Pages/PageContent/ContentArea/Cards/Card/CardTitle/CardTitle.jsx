import React from "react";
import classes from "./CardTitle.module.css";
import img from "../../../../../../assets/Image.png";

const CardTitle = () => {
  return (
    <div className={classes.cardTitle__container}>
      <h2 className={classes.cardTitile__text}>Наименование блюда</h2>
      <img src={img} className={classes.cardTitile__img} key={""} />
    </div>
  );
};

export default CardTitle;
