import React from 'react';

import PropTypes from 'prop-types';
import { getPosition } from '../../utils/utils';

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
        props.showStoryIdList.map((storyId, index) => {
          return (
            <StoryListItem
              position={getPosition(index, props.currentPageNumber)}
              key={storyId}
              id={storyId}
            />
          );
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
