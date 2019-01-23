import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

/**
 *
 * @param {object} props
 * @returns {object}
 * */
const PaginationFooter = props => {
  const {
    isDisabledLeft,
    isDisabledRight,
    currentPageNumber,
    handleNextPaginationClick,
    handlePreviousPaginationClick
  } = props;

  return (
    <div className="clearfix pagination">
      <div className="left">
        <button
          disabled={isDisabledLeft(props.currentPageNumber)}
          onClick={handlePreviousPaginationClick}
          className="paginationButton"
        >
          Previous
        </button>
      </div>

      <div className="page-number">{currentPageNumber + 1}</div>

      <div className="right">
        <button
          disabled={isDisabledRight(currentPageNumber)}
          onClick={handleNextPaginationClick}
          className="paginationButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

PaginationFooter.propTypes = {
  isDisabledLeft: PropTypes.func,
  isDisabledRight: PropTypes.func,
  currentPageNumber: PropTypes.number,
  handleNextPaginationClick: PropTypes.func,
  handlePreviousPaginationClick: PropTypes.func
};

export default PaginationFooter;
