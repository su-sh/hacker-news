import React from 'react';

import PropTypes from 'prop-types';

import Loading from '../Loading';
import PaginationFooter from '../Pagination';
import StoryListItem from './StoryListItem';

/**
 *
 * @param {object} props
 * @returns {object}
 * @memberof Show
 */
const StoryListWrapper = props => {
  return (
    <div>
      {!props.showStoryIdList.length ? (
        <Loading />
      ) : (
        props.showStoryIdList.map(storyId => {
          return <StoryListItem key={storyId} id={storyId} />;
        })
      )}
      <PaginationFooter />
    </div>
  );
};

StoryListWrapper.propTypes = {
  showStoryIdList: PropTypes.array
};

export default StoryListWrapper;
