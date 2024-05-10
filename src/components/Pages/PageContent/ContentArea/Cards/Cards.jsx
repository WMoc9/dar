import React, { useEffect } from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const Cards = ({ filteredRecipes, isLoading }) => {
  const page = useSelector((state) => state.page.number);

  const limit = 6;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);

  useEffect(() => {}, [filteredRecipes, page]);

  return (
    <div className={classes.cards__container}>
      {paginatedRecipes.length > 0 ? (
        paginatedRecipes.map((item) => (
          <Link className={classes.link} to={`/${item.id}`} key={item.id}>
            <Card
              key={item.id}
              name={item.name}
              ingredients={item.ingredients}
              cookTimeMinutes={item.cookTimeMinutes}
              difficulty={item.difficulty}
              cuisine={item.cuisine}
              mealType={item.mealType}
              image={item.image}
            />
          </Link>
        ))
      ) : isLoading ? (
        <div className={classes.spin__wrapper}>
          <Spin tip="Loading" size="large"></Spin>
        </div>
      ) : (
        <div className={classes.notFound}>
          Рецепты по вашим параметрам не найдены
        </div>
      )}
    </div>
  );
};

export default Cards;
