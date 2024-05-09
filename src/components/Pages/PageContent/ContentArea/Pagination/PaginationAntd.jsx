import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../../store/pageSlice";

const PaginationAntd = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.number);
  const totalRecipes = useSelector((state) => state.posts.totalPosts);

  useEffect(() => {
    dispatch(changePage(1));
    setCurrentPage(1);
  }, [dispatch, totalRecipes]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      defaultCurrent={page}
      defaultPageSize={6}
      total={totalRecipes}
      current={currentPage}
      onChange={(page) => {
        dispatch(changePage(page));
        setCurrentPage(page);
      }}
    />
  );
};

export default PaginationAntd;
