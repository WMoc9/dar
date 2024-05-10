import React, { useState } from "react";
import img from "../../../../assets/Image.png";
import classes from "./FilterContent.module.css";
import gif from "../../../../assets/cats.gif";

const FilterContent = () => {
  const [srcImg, setSrcImg] = useState(img);
  function changeSrc() {
    srcImg === img ? setSrcImg(gif) : setSrcImg(img);
  }
  return (
    <div className={classes.filterContent__container}>
      <div className={classes.filterContent__imgWrapper} onClick={changeSrc}>
        <img className={classes.filterContent__img} src={srcImg} alt="Блюдо" />
        {srcImg === img ? (
          <div className={classes.filterContent__imgText}>Нажми на меня</div>
        ) : null}
      </div>
      <div className={classes.filterContent__description}>
        <p className={classes.filterContent__description__item}>
          В нашей жизни, когда время становится все более ценным ресурсом,
          задача планирования приема пищи становится все более сложной.
        </p>
        <p className={classes.filterContent__description__item}>
          Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или
          ужин? Каким образом мы можем легко и быстро определиться с выбором
          блюда и не тратить много времени на принятие этого решения?
        </p>
        <p className={classes.filterContent__description__item}>
          Наш сервис поможет: выбирайте параметры - и вперед!
        </p>
      </div>
    </div>
  );
};

export default FilterContent;
