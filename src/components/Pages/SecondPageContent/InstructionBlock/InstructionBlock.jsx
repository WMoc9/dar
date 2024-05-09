import React from "react";
import classes from "./InstructionBlock.module.css";
import InfoWrapper from "../../../UI/InfoWrapper/InfoWrapper";
import Block from "../../../UI/Block/Block";

const InstructionBlock = ({ cookTimeMinutes, instructions }) => {
  const time = classes.time;
  return (
    <InfoWrapper>
      <Block
        title={"Общее время приготовления"}
        value={cookTimeMinutes + " минут"}
        classs={time}
      />
      <Block
        title={"Инструкция по приготовлению"}
        value={instructions}
        type={"instructions"}
      />
    </InfoWrapper>
  );
};

export default InstructionBlock;
