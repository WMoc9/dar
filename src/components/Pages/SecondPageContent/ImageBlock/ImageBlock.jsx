import React from "react";
import classes from "./ImageBlock.module.css";
import img from "../../../assets/Image.png";
import arrowL from "../../../assets/Left.png";
import arrowR from "../../../assets/Vector1.png";

const ImageBlock = () => {
  return (
    <div className={classes.imageBlock__conatiner}>
      <div className={classes.img__wrapper}>
        <img className={classes.imageBlock__img} src={img} alt={"Блюдо"} />
      </div>
      <div className={classes.pagination__wrapper}>
        <div className={classes.arrow__conatiner}>
          <div className={classes.arrow__wrapper}>
            <img className={classes.arrow} src={arrowL} alt={"Лево"} />
          </div>
          <div className={classes.arrow__wrapper}>
            <img className={classes.arrow} src={arrowR} alt={"Право"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
