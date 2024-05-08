import React from "react";
import classes from "./ContentArea.module.css";
import ContentTitle from "./ContentTitle/ContentTitle";
import Cards from "./Cards/Cards";
import PaginationAntd from "./Pagination/PaginationAntd";
const ContentArea = () => {
  return (
    <div className={classes.contentArea__conatiner}>
      <ContentTitle />
      <Cards />
      <PaginationAntd />
    </div>
  );
};

export default ContentArea;
