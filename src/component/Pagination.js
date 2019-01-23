import React from 'react';
import '../App.css';
/**
 *
 *
 * @returns {object}
 * */
const PaginationFooter = () => {
  return (
    <div className="clearfix pagination">
      <div className="left">
        <button className="paginationButton">Previous</button>
      </div>
      <div className="page-number">100</div>
      <div className="right">
        <button className="paginationButton">Next</button>
      </div>
    </div>
  );
};

export default PaginationFooter;
