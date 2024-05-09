import React from "react";
import classes from "./ContentTitle.module.css";
import { useSelector } from "react-redux";

const ContentTitle = () => {
  const totalRecipes = useSelector((state) => state.posts.totalPosts);
  return (
    <div className={classes.title__container}>
      <div className={classes.title__content}>
        <div className={classes.title__name}>Найдено рецептов:</div>
        <div className={classes.title__value}>{totalRecipes}</div>
      </div>
    </div>
  );
};

export default ContentTitle;
