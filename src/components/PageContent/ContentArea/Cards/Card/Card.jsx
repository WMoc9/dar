import React from "react";
import classes from "./Card.module.css";
import CardTitle from "./CardTitle/CardTitle";
import CardDiescription from "./CardDescription/CardDiescription";

const Card = () => {
  return (
    <div className={classes.card__container}>
      <CardTitle />
      <CardDiescription />
    </div>
  );
};

export default Card;
