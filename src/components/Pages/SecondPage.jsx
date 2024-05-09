import React, { useEffect, useState } from "react";
import SecondPageHeader from "./SecondPageHeader/SecondPageHeader";
import SecondPageContent from "./SecondPageContent/SecondPageContent";
import { useParams } from "react-router-dom";
import { fetchOneRecipe } from "../../http/recipesAPI";
const SecondPage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchOneRecipe(id).then((data) => {
      setRecipeInfo(data);
    });
  }, [id]);
  return (
    <div>
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
  );
};

export default SecondPage;
