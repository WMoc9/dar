import React from "react";
import classes from "./MyPagination.module.css";
import arrowL from "../../assets/Left.svg";
import arrowR from "../../assets/Right.svg";

const MyPagination = ({ isLastPage, isFirstPage, nextClick, prevClick }) => {
  return (
    <div className={classes.pagination__wrapper}>
      <div className={classes.arrow__conatiner}>
        <button
          disabled={isFirstPage}
          onClick={prevClick}
          className={classes.arrow__wrapper}
        >
          <img className={classes.arrow} src={arrowL} alt={"Лево"} />
        </button>
        <button
          onClick={nextClick}
          disabled={isLastPage}
          className={classes.arrow__wrapper}
        >
          <img className={classes.arrow} src={arrowR} alt={"Право"} />
        </button>
      </div>
    </div>
  );
};

export default MyPagination;
