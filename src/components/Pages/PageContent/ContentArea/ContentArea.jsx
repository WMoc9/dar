import React, { useEffect, useState } from "react";
import classes from "./ContentArea.module.css";
import ContentTitle from "./ContentTitle/ContentTitle";
import Cards from "./Cards/Cards";
import PaginationAntd from "./Pagination/PaginationAntd";
import { fetchAllRecipes } from "../../../../http/recipesAPI";
import { useDispatch, useSelector } from "react-redux";
import { changeTotalPosts } from "../../../../store/postsSlice";

const ContentArea = () => {
  const { country, typeMeal, difficulty } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllRecipes().then((data) => {
      const filteredRecipes = data.recipes.filter(
        (item) =>
          (country === "*" ? true : item.cuisine === country) &&
          (typeMeal === "*" ? true : item.mealType.includes(typeMeal)) &&
          (difficulty === "any" ? true : item.difficulty === difficulty)
      );
      dispatch(changeTotalPosts(filteredRecipes.length));
      setFilteredRecipes(filteredRecipes);
      setIsLoading(false);
    });
  }, [country, difficulty, typeMeal, dispatch]);

  return (
    <div className={classes.contentArea__conatiner}>
      <ContentTitle />
      <Cards isLoading={isLoading} filteredRecipes={filteredRecipes} />
      <PaginationAntd />
    </div>
  );
};

export default ContentArea;
