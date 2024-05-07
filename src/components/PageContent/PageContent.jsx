import React from "react";
import classes from "./PageContent.module.css";
import FilterArea from "./FilterArea/FilterArea";
import ContentArea from "./ContentArea/ContentArea";

const PageContent = () => {
  return (
    <div className={classes.pageContent__container}>
      <FilterArea />
      <ContentArea />
    </div>
  );
};

export default PageContent;
