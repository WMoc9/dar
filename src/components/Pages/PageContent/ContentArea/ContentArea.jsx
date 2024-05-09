import React, { useEffect, useState } from "react";
import classes from "./ContentArea.module.css";
import ContentTitle from "./ContentTitle/ContentTitle";
import Cards from "./Cards/Cards";
import PaginationAntd from "./Pagination/PaginationAntd";
import { fetchAllRecipes } from "../../../../http/recipesAPI";

const ContentArea = () => {
  const [totalRecipes, setTotalRecipes] = useState(0);
  useEffect(() => {
    fetchAllRecipes().then((data) => setTotalRecipes(data.total));
  }, []);

  return (
    <div className={classes.contentArea__conatiner}>
      <ContentTitle totalRecipes={totalRecipes} />
      <Cards />
      <PaginationAntd totalRecipes={totalRecipes} />
    </div>
  );
};

export default ContentArea;
