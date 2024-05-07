import React from "react";
import classes from "./ContentTitle.module.css";

const ContentTitle = () => {
  return (
    <div className={classes.title__container}>
      <div className={classes.title__content}>
        <div className={classes.title__name}>Найденные рецепты</div>
        <div className={classes.title__value}>299</div>
      </div>
    </div>
  );
};

export default ContentTitle;
