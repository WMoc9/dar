import React from "react";
import classes from "./InstructionBlock.module.css";
import InfoWrapper from "../../../UI/InfoWrapper/InfoWrapper";
import Block from "../../../UI/Block/Block";

const InstructionBlock = () => {
  const time = classes.time;
  return (
    <InfoWrapper>
      <Block
        title={"Общее время приготовления"}
        value={"30 минут"}
        classs={time}
      />
      <Block
        title={"Инструкция по приготовлению"}
        value={["собрать", "нарезать", "взбить"]}
      />
    </InfoWrapper>
  );
};

export default InstructionBlock;
