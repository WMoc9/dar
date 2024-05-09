import classes from "./BodyBlock.module.css";

const BodyBlock = ({ value, classs, moreInfo, type }) => {
  const moreInformation = moreInfo || false;

  if (type === "instructions" && value !== undefined) {
    return (
      <ul className={classes.list}>
        {value.map((item, index) => (
          <li key={index} className={classes.list__item}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (type === "tags" && value !== undefined) {
    const formattedTags = value.map((tag) => `#${tag}`).join(", ");
    return (
      <div className={classes.bodyBlock__conatiner}>
        <div className={classs}>{formattedTags}</div>
      </div>
    );
  }
  if (type === "description" && value !== undefined) {
    const formattedDesc = value.map((tag) => `${tag}`).join(". ");
    return (
      <div className={classes.bodyBlock__conatiner}>
        <div className={classs}>{formattedDesc}</div>
      </div>
    );
  }
  return (
    <div className={classes.bodyBlock__conatiner}>
      {moreInformation ? (
        <div className={classes.moreInfo__wrapper}>
          <div className={classs}>{value}</div>
          <div className={classes.moreInfo}>{moreInformation}</div>
        </div>
      ) : (
        <div className={classs}>{value}</div>
      )}
    </div>
  );
};

export default BodyBlock;
