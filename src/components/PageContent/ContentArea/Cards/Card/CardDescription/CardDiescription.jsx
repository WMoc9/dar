import React from "react";
import classes from "./CardDescription.module.css";
import clocks from "../../../../../assets/Vector.png";
import star from "../../../../../assets/icon.png";
import fillStar from "../../../../../assets/icon (1).png";

const CardDiescription = () => {
  return (
    <div className={classes.description__container}>
      <div className={classes.description__text}>
        Традиционное итальянское блюдо, изначально в виде круглой
        дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного
        соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы
        и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
      </div>
      <div className={classes.description__time}>
        <img src={clocks} alt={"Иконка часов"} />
        <div className={classes.description__time__item}>30 минут</div>
      </div>
      <div className={classes.description__difficulty}>
        <div>Сложность:</div>
        <div className={classes.star__container}>
          <img src={fillStar} alt={""} />
          <img src={star} alt={""} />
          <img src={star} alt={""} />
        </div>
      </div>
      <div className={classes.description__kitchen}>Европейская кухня</div>
      <div className={classes.description__meal}>Завтрак, Обед, Ужин</div>
    </div>
  );
};

export default CardDiescription;
