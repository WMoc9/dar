import React from "react";
import classes from "./InfoBlock.module.css";
import Block from "../../../UI/Block/Block";
import InfoWrapper from "../../../UI/InfoWrapper/InfoWrapper";

const InfoBlock = ({
  cuisine,
  tags,
  caloriesPerServing,
  servings,
  ingredients,
}) => {
  const tag = classes.tags;
  const defaultt = classes.defaultt;
  const portion = classes.portion;
  const description = classes.description;
  return (
    <InfoWrapper>
      <Block title={"Кухня"} value={cuisine} classs={defaultt} />
      <Block title={"Теги"} value={tags} classs={tag} type={"tags"} />
      <Block
        title={"Калорийность"}
        value={caloriesPerServing + " ккал"}
        classs={defaultt}
        moreInfo={"100 грамм"}
      />
      <Block title={"Количество порций"} value={servings} classs={portion} />
      <Block
        title={"Описание"}
        value={ingredients}
        classs={description}
        type={"description"}
      />
    </InfoWrapper>
  );
};

export default InfoBlock;
