import React from "react";
import classes from "./SecondPageHeader.module.css";
import arrow from "../../assets/ArrowLeft.png";

const SecondPageHeader = () => {
  return (
    <div className={classes.header__conatiner}>
      <div className={classes.header__content}>
        <div className={classes.img__container}>
          <img className={classes.header__img} src={arrow} alt={"Назад"} />
        </div>
        <div className={classes.header__title}>Наименование блюда длинное</div>
      </div>
    </div>
  );
};

export default SecondPageHeader;
