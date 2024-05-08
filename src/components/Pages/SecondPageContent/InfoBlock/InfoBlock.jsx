import React from "react";
import classes from "./InfoBlock.module.css";
import Block from "../../../UI/Block/Block";
import InfoWrapper from "../../../UI/InfoWrapper/InfoWrapper";

const InfoBlock = () => {
  const tags = classes.tags;
  const defaultt = classes.defaultt;
  const portion = classes.portion;
  const description = classes.description;
  return (
    <InfoWrapper>
      <Block title={"Кухня"} value={"Европейская"} classs={defaultt} />
      <Block title={"Теги"} value={"#Выпечка"} classs={tags} />
      <Block
        title={"Калорийность"}
        value={"444 ккал"}
        classs={defaultt}
        moreInfo={"100 грамм"}
      />
      <Block title={"Количество порций"} value={"4"} classs={portion} />
      <Block
        title={"Описание"}
        value={
          "Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой."
        }
        classs={description}
      />
    </InfoWrapper>
  );
};

export default InfoBlock;
