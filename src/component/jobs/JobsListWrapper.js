import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { STORY_TYPE } from '../../constants/api';
import { fetchStoriesIndexArray, fetchItem } from '../../api/api';
import { getPosition, getShowStoryList } from '../../utils/utils';
import { MAX_NO_OF_STORIES } from '../../constants/commonConstants';

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
      stories: [],
      isLoaded: false
    };

    this.start = this.state.currentPageNumber * MAX_NO_OF_STORIES;
    this.end = this.start + MAX_NO_OF_STORIES;
  }

  /**
   *
   *
   * @memberof JobsListWrapper
   * @param {boolean} bool
   */
  setIsLoaded = bool => {
    this.setState({
      isLoaded: bool
    });
  };

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    await fetchStoriesIndexArray(STORY_TYPE.JOB_STORIES).then(res => {
      this.setState({
        allStoriesIdList: res.data,

        isLoaded: false
      });
      this.loadStories();
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
    const nosOfElementsTillCurrentPage =
      (currentPageNumber + 1) * MAX_NO_OF_STORIES;

    if (nosOfElementsTillCurrentPage >= this.state.allStoriesIdList.length) {
      return true;
    } else {
      return this.getDisableStatus();
    }
  };

  /**
   * This function checks if previous button on pagination component is disabled.
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledLeft = currentPageNumber => {
    if (currentPageNumber === 0) {
      return true;
    } else {
      return this.getDisableStatus();
    }
  };

  /**
   *
   *
   * @returns {boolean}
   */
  getDisableStatus = () => {
    if (!this.state.isLoaded) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * This function loads individual story item.
   *
   * @returns {*}
   */
  loadStories = async () => {
    this.setIsLoaded(false);

    const slicedArray = this.state.allStoriesIdList.slice(
      this.start,
      this.end - 1
    );

    if (this.start > this.state.allStoriesIdList.length) {
      this.setIsLoaded(true);

      return;
    }

    /* eslint-disable no-await-in-loop */
    for (const item of slicedArray) {
      await fetchItem(item).then(res => {
        this.setState({
          stories: [...this.state.stories, res.data]
        });
      });
    }

    this.setIsLoaded(true);
  };

  /**
   * This function generates and returns array of StoryListItems for current page.
   *
   * @returns {array} Returns array of StoryListItem.
   * */
  getJobsList = () => {
    return this.state.stories
      .slice(this.start, this.end)
      .map((story, index) => {
        if (story) {
          return (
            <JobListItem
              position={getPosition(index, this.state.currentPageNumber)}
              key={story.id}
              id={story.id}
              data={story}
            />
          );
        } else {
          return '';
        }
      });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof StoryListWrapper
   */
  render() {
    this.start = this.state.currentPageNumber * MAX_NO_OF_STORIES;
    this.end = this.start + MAX_NO_OF_STORIES;

    const storyList = this.getJobsList();

    return (
      <div>
        {storyList}

        {!this.state.isLoaded ? <Loading /> : ''}

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
