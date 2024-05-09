import React from "react";
import classes from "./CardDescription.module.css";
import clocks from "../../../../../../assets/clocks.svg";
import star from "../../../../../../assets/star.svg";
import fillStar from "../../../../../../assets/fillStar.svg";

const CardDiescription = ({
  ingredients,
  cookTimeMinutes,
  difficulty,
  cuisine,
  mealType,
}) => {
  const renderStars = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return (
          <>
            <img src={fillStar} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </>
        );
      case "Medium":
        return (
          <>
            <img src={fillStar} alt="" />
            <img src={fillStar} alt="" />
            <img src={star} alt="" />
          </>
        );
      case "Hard":
        return (
          <>
            <img src={fillStar} alt="" />
            <img src={fillStar} alt="" />
            <img src={fillStar} alt="" />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className={classes.description__container}>
      <div className={classes.description__text}>
        {ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
      </div>
      <div className={classes.description__time}>
        <img src={clocks} alt={"Иконка часов"} />
        <div className={classes.description__time__item}>
          {cookTimeMinutes + " минут"}
        </div>
      </div>
      <div className={classes.description__difficulty}>
        <div>{difficulty}:</div>
        <div className={classes.star__container}>{renderStars(difficulty)}</div>
      </div>
      <div className={classes.description__kitchen}>{cuisine} кухня</div>
      <div className={classes.description__meal}>{mealType.join(", ")}</div>
    </div>
  );
};

export default CardDiescription;
