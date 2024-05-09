import React from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../../store/pageSlice";

const PaginationAntd = ({ totalRecipes }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);

  return (
    <Pagination
      defaultCurrent={page}
      defaultPageSize={6}
      total={totalRecipes}
      onChange={(page) => {
        dispatch(changePage(page));
      }}
    />
  );
};

export default PaginationAntd;
