import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { PaginateItem, PaginationContainer } from './pagination.style';

/**
 * Render a <Pagination> component
 *
 * @param {Object}   props                 The props object.
 * @param {Number}   props.pageSize        The number of articles per page.
 * @param {Number}   props.currentPage     The current page number.
 * @param {Function} props.onPageChange    Function to handle page change.
 * @param {Number}   props.itemCount       The number of articles.
 *
 * @return {JSX.Element}
 */
const Pagination = ({ pageSize, currentPage, onPageChange, itemsCount }) => {
  const numberOfPages = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, numberOfPages + 1);

  if (numberOfPages === 1 || numberOfPages === 0) {
    return null;
  }

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PaginateItem
          active={page === currentPage}
          onClick={() => onPageChange(page)}
          key={page}
        >
          {page}
        </PaginateItem>
      ))}
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

Pagination.defaultProps = {
  pageSize: 10,
  currentPage: 1,
  onPageChange: null,
  itemsCount: 0,
};
