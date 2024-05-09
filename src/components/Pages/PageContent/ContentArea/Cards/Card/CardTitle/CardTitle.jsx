import React from "react";
import classes from "./CardTitle.module.css";

const CardTitle = ({ name, image }) => {
  return (
    <div className={classes.cardTitle__container}>
      <h2 className={classes.cardTitile__text}>{name}</h2>
      <img
        src={image}
        className={classes.cardTitile__img}
        key={""}
        alt={"Блюдо"}
      />
    </div>
  );
};

export default CardTitle;
