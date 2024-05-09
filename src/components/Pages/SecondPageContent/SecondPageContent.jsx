import React from "react";
import classes from "./SecondPageContent.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import InstructionBlock from "./InstructionBlock/InstructionBlock";
import ImageBlock from "./ImageBlock/ImageBlock";

const SecondPageContent = ({
  cuisine,
  tags,
  caloriesPerServing,
  servings,
  ingredients,
  cookTimeMinutes,
  instructions,
  image,
  id,
}) => {
  return (
    <div className={classes.content__container}>
      <InfoBlock
        cuisine={cuisine}
        tags={tags}
        caloriesPerServing={caloriesPerServing}
        servings={servings}
        ingredients={ingredients}
      />
      <InstructionBlock
        cookTimeMinutes={cookTimeMinutes}
        instructions={instructions}
      />
      <ImageBlock image={image} id={id} />
    </div>
  );
};

export default SecondPageContent;
