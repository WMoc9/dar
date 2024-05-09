import classes from "./ImageBlock.module.css";
import arrowL from "../../../assets/Left.svg";
import arrowR from "../../../assets/Right.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageBlock = ({ image, id }) => {
  const totalPosts = useSelector((state) => state.posts.totalPosts);
  const isFirstPage = id === 1;
  const isLastPage = id === totalPosts;

  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (!isFirstPage) {
      navigate(`/${id - 1}`);
    }
  };
  const handleNextClick = () => {
    if (!isLastPage) {
      navigate(`/${id + 1}`);
    }
  };

  return (
    <div className={classes.imageBlock__conatiner}>
      <div className={classes.img__wrapper}>
        <img className={classes.imageBlock__img} src={image} alt={"Блюдо"} />
      </div>
      <div className={classes.pagination__wrapper}>
        <div className={classes.arrow__conatiner}>
          <button
            disabled={isFirstPage}
            onClick={handlePrevClick}
            className={classes.arrow__wrapper}
          >
            <img className={classes.arrow} src={arrowL} alt={"Лево"} />
          </button>
          <button
            onClick={handleNextClick}
            disabled={isLastPage}
            className={classes.arrow__wrapper}
          >
            <img className={classes.arrow} src={arrowR} alt={"Право"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
