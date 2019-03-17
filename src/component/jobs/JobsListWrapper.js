import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { STORY_TYPE } from '../../constants/api';
import { fetchStoriesIndexArray } from '../../api/api';
import { getPosition, getShowStoryList } from '../../utils/utils';

import Loading from '../Loading';
import JobListItem from './JobListItem';
import PaginationFooter from '../Pagination';

/**
 *
 *
 * @class JobsListWrapper
 * @extends {Component}
 */
class JobsListWrapper extends Component {

  /**
   * Creates an instance of Newest.
   *
   * @memberof StoryListWrapper
   */
  constructor() {
    super();
    this.state = {
      currentPageNumber: 0,
      allStoriesIdList: undefined,
      showStoryIdList: undefined,
      isLoaded: false
    };
  }

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    const newArray = await fetchStoriesIndexArray(STORY_TYPE.JOB_STORIES);

    this.setState({
      allStoriesIdList: newArray,
      showStoryIdList: newArray.slice(0, 30),

      isLoaded: true
    });
  };

  /**
   * This function handles click on previous button, from pagination component.
   *
   * @memberof JobsListWrapper
   */
  handlePreviousPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber--;
    this.setState(
      {
        currentPageNumber
      },
      () => {
        this.setState({
          showStoryIdList: getShowStoryList(
            this.state.allStoriesIdList,
            this.state.currentPageNumber
          )
        });
      }
    );
  };

  /**
   * This function handles click on next button, from pagination component.
   *
   * @memberof JobsListWrapper
   */
  handleNextPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber++;
    this.setState(
      {
        currentPageNumber
      },
      () => {
        this.setState({
          showStoryIdList: getShowStoryList(
            this.state.allStoriesIdList,
            this.state.currentPageNumber
          )
        });
      }
    );
  };

  /**
   * This function checks if next button on pagination component is disabled.
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledRight = currentPageNumber => {
    const nosOfElementsTillCurrentPage = (currentPageNumber + 1) * 30;

    if (nosOfElementsTillCurrentPage >= this.state.allStoriesIdList.length) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * This function checks if previous button on pagination component is disabled.
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledLeft = currentPageNumber => {
    return currentPageNumber === 0;
  };

  /**
   *
   *
   * @returns {object}
   * @memberof StoryListWrapper
   */
  render() {
    return (
      <div>
        {!this.state.showStoryIdList ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map((storyId, index) => {
            return (
              <JobListItem
                position={getPosition(index, this.state.currentPageNumber)}
                key={storyId}
                id={storyId}
              />
            );
          })
        )}

        {this.state.allStoriesIdList ? (
          <PaginationFooter
            currentPageNumber={this.state.currentPageNumber}
            handlePreviousPaginationClick={this.handlePreviousPaginationClick}
            handleNextPaginationClick={this.handleNextPaginationClick}
            isDisabledLeft={this.isDisabledLeft}
            isDisabledRight={this.isDisabledRight}
          />
        ) : (
          ''
        )}
      </div>
    );
  }

}

JobsListWrapper.propTypes = {
  storyType: PropTypes.string
};

export default JobsListWrapper;
