import classes from "./BodyBlock.module.css";

const BodyBlock = ({ value, classs, moreInfo }) => {
  const moreInformation = moreInfo || false;

  if (Array.isArray(value)) {
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
