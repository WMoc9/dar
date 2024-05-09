import React, { Fragment, useEffect, useState } from "react";
import SecondPageHeader from "./SecondPageHeader/SecondPageHeader";
import SecondPageContent from "./SecondPageContent/SecondPageContent";
import { useParams } from "react-router-dom";
import { fetchOneRecipe } from "../../http/recipesAPI";
import { Spin } from "antd";
import classes from "./SecondPage.module.css";

const SecondPage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchOneRecipe(id).then((data) => {
      setRecipeInfo(data);
      setIsLoading(false);
    });
  }, [id]);
  return (
    <Fragment>
      {isLoading ? (
        <div className={classes.spinner__container}>
          <Spin tip="Loading" size="large"></Spin>
        </div>
      ) : (
        <div className={classes.secondPage__conatainer}>
          <SecondPageHeader name={recipeInfo.name} />
          <SecondPageContent
            id={recipeInfo.id}
            cuisine={recipeInfo.cuisine}
            tags={recipeInfo.tags}
            caloriesPerServing={recipeInfo.caloriesPerServing}
            servings={recipeInfo.servings}
            ingredients={recipeInfo.ingredients}
            cookTimeMinutes={recipeInfo.cookTimeMinutes}
            instructions={recipeInfo.instructions}
            image={recipeInfo.image}
          />
        </div>
      )}
    </Fragment>
  );
};

export default SecondPage;
