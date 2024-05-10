import classes from "./ImageBlock.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyPagination from "../../../UI/MyPagination/MyPagination";

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
      <MyPagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        nextClick={handleNextClick}
        prevClick={handlePrevClick}
      />
    </div>
  );
};

export default ImageBlock;
