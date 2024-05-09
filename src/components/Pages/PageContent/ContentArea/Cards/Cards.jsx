import React, { useEffect, useState } from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";
import { fetchRecipesWithLimitAndSkip } from "../../../../../http/recipesAPI";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = () => {
  const [recipesData, setRecipesData] = useState([]);
  const page = useSelector((state) => state.page.value);
  useEffect(() => {
    fetchRecipesWithLimitAndSkip(6, page === 1 ? 0 : (page - 1) * 6).then(
      (data) => setRecipesData(data.recipes)
    );
  }, [page]);
  return (
    <div className={classes.cards__container}>
      {recipesData.length > 0
        ? recipesData.map((item) => (
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
        : null}
    </div>
  );
};

export default Cards;
