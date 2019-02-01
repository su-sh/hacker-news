import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { fetchStoriesIndexArray, fetchItem } from '../../api/api';
import { getPosition } from '../../utils/utils';

import Loading from '../Loading';
import StoryListItem from './StoryListItem';
import PaginationFooter from '../Pagination';

/**
 *
 *
 * @class StoryListWrapper
 * @extends {Component}
 */
class StoryListWrapper extends Component {

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

    this.start = this.state.currentPageNumber * 30;
    this.end = this.start + 30;
  }

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    await fetchStoriesIndexArray(this.props.storyType).then(res => {
      this.setState({
        allStoriesIdList: res.data,

        isLoaded: false
      });
      this.loadStories();
    });
  };

  /**
   *
   *
   * @param {*} prevProps
   * @param {*} prevState
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentPageNumber !== this.state.currentPageNumber) {
      // Total number of stories that current page should conatin
      const totalNosOfStoriesInCurrentPage =
        (this.state.currentPageNumber + 1) * 30;

      if (this.state.stories.length < totalNosOfStoriesInCurrentPage) {
        this.loadStories();
      }
    }
  };

  /**
   *
   *
   *
   */
  loadStories = async () => {
    this.setIsLoaded(false);

    /* eslint-disable no-await-in-loop */
    for (let i = this.start; i < this.end; i++) {
      // handles last list item
      if (i >= this.state.allStoriesIdList.length) {
        this.setIsLoaded(true);

        return;
      }
      await fetchItem(this.state.allStoriesIdList[i]).then(res => {
        this.setState({
          stories: [...this.state.stories, res.data]
        });
      });
    }
    this.setIsLoaded(true);
  };

  /**
   *
   * @param {boolean} bool
   * @memberof StoryListWrapper
   */
  setIsLoaded = bool => {
    this.setState({
      isLoaded: bool
    });
  };

  handlePreviousPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber--;
    this.setState({
      currentPageNumber
    });
  };

  handleNextPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber++;
    this.setState({
      currentPageNumber
    });
  };

  /**
   *
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledRight = currentPageNumber => {
    if ((currentPageNumber + 1) * 30 >= this.state.allStoriesIdList.length) {
      return true;
    } else {
      return this.getDisableStatus();
    }
  };

  /**
   *
   *
   * @param {*} currentPageNumber
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
   * This function generates and returns array of StoryListItems for current page.
   *
   * @returns {array} Returns array of StoryListItem.
   * */
  getStoryList = () => {
    return this.state.stories
      .slice(this.start, this.end)
      .map((storyId, index) => {
        return (
          <StoryListItem
            position={getPosition(index, this.state.currentPageNumber)}
            key={storyId.id}
            id={storyId.id}
            data={storyId}
          />
        );
      });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof StoryListWrapper
   */
  render() {
    this.start = this.state.currentPageNumber * 30;
    this.end = this.start + 30;

    const storyList = this.getStoryList();

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

StoryListWrapper.propTypes = {
  storyType: PropTypes.string
};

export default StoryListWrapper;
