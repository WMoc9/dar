import React from "react";
import classes from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <div className={classes.header__container}>
      <p className={classes.header__title}>
        Сборник рецептов из разных стран мира
      </p>
    </div>
  );
};

export default PageHeader;
