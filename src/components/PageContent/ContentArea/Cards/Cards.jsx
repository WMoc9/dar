import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className={classes.cards__container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
