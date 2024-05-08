import React from "react";
import classes from "./SecondPageContent.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import InstructionBlock from "./InstructionBlock/InstructionBlock";
import ImageBlock from "./ImageBlock/ImageBlock";

const SecondPageContent = () => {
  return (
    <div className={classes.content__container}>
      <InfoBlock />
      <InstructionBlock />
      <ImageBlock />
    </div>
  );
};

export default SecondPageContent;
