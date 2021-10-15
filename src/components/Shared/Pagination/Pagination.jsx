import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import {
  PaginationContainer,
  PaginateItem,
  ActiveItem,
} from "./pagination.style";
const Pagination = ({ pageSize, currentPage, onPageChange, itemsCount }) => {
  const numberOfPages = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, numberOfPages + 1);
  if (numberOfPages === 1 || numberOfPages === 0) return null;
  return (
    <PaginationContainer>
      {pages.map((page) =>
        page === currentPage ? (
          <ActiveItem onClick={() => onPageChange(page)} key={page}>
            {page}
          </ActiveItem>
        ) : (
          <PaginateItem onClick={() => onPageChange(page)} key={page}>
            {page}
          </PaginateItem>
        )
      )}
    </PaginationContainer>
  );
};

export default Pagination;
Pagination.propTypes = {
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  itemsCount: PropTypes.number,
};
