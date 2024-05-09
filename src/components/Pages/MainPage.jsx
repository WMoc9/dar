import React from "react";
import PageHeader from "./PageHeader/PageHeader";
import PageContent from "./PageContent/PageContent";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={classes.mainPage__container}>
      <PageHeader />
      <PageContent />
    </div>
  );
};

export default MainPage;
