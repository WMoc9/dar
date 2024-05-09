import React from "react";
import classes from "./Card.module.css";
import CardTitle from "./CardTitle/CardTitle";
import CardDiescription from "./CardDescription/CardDiescription";

const Card = ({
  name,
  image,
  ingredients,
  cookTimeMinutes,
  difficulty,
  cuisine,
  mealType,
}) => {
  return (
    <div className={classes.card__container}>
      <CardTitle name={name} image={image} />
      <CardDiescription
        ingredients={ingredients}
        cookTimeMinutes={cookTimeMinutes}
        difficulty={difficulty}
        cuisine={cuisine}
        mealType={mealType}
      />
    </div>
  );
};

export default Card;
