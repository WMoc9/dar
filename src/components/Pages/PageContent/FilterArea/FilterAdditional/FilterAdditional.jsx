import React from "react";
import classes from "./FilterAdditional.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FilterAdditional = () => {
  const totalPosts = useSelector((state) => state.posts.totalPosts);
  const generateRandomId = () => {
    return Math.floor(Math.random() * totalPosts) + 1;
  };
  const randomId = generateRandomId();
  return (
    <div className={classes.additional__container}>
      <p className={classes.additional__text}>
        А еще можно попробовать на вкус удачу
      </p>
      <Link className={classes.link} to={`/${randomId}`}>
        <button className={classes.additional__btn}>Мне повезет!</button>
      </Link>
    </div>
  );
};

export default FilterAdditional;
