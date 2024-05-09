import React from "react";
import classes from "./SecondPageHeader.module.css";
import arrow from "../../assets/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

const SecondPageHeader = ({ name }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("back");
  };
  return (
    <div className={classes.header__conatiner}>
      <div className={classes.header__content}>
        <div className={classes.img__container} onClick={goBack}>
          <img className={classes.header__img} src={arrow} alt={"Назад"} />
        </div>
        <div className={classes.header__title}>{name}</div>
      </div>
    </div>
  );
};

export default SecondPageHeader;
