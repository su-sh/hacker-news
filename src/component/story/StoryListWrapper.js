import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchStoriesIndexArray, fetchItem } from '../../api/api';
import { getPosition, getShowStoryList } from '../../utils/utils';

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
    this.shouldLoad = true;

    // this.promise = getStoriesIndexArray(this.props.storyType);
    this.state = {
      currentPageNumber: 0,
      allStoriesIdList: undefined,
      showStoryIdList: undefined,
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
        showStoryIdList: res.data.slice(0, 30),

        isLoaded: false
      });
      this.loadStories();
    });
  };

  componentWillUnmount = () => {
    // console.log();
    this.shouldLoad = false;
    // this.promise.reject();
  };

  /**
   * Update the shown after changing page.
   *
   * @param {*} prevProps
   * @param {*} prevState
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentPageNumber !== this.state.currentPageNumber) {
      this.loadStories();
    }
  };
  loadStories = () => {
    for (let i = this.start; i < this.end; i++) {
      fetchItem(this.state.allStoriesIdList[i]).then(res => {
        this.setState(
          {
            stories: [...this.state.stories, res.data]
          },
          () => {}
        );
      });
    }
    this.setState({
      isLoaded: true
    });
  };

  handlePreviousPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber--;
    this.setState(
      {
        currentPageNumber
      },
      () => {
        console.log(this.state.currentPageNumber);
        this.setState({
          showStoryIdList: getShowStoryList(
            this.state.allStoriesIdList,
            this.state.currentPageNumber
          )
        });
      }
    );
  };

  handleNextPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber++;
    this.setState(
      {
        currentPageNumber
      },
      () => {
        console.log(this.state.currentPageNumber);
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
   *
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledRight = currentPageNumber => {
    if ((currentPageNumber + 1) * 30 >= this.state.allStoriesIdList.length) {
      return true;
    } else {
      return false;
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
      return false;
    }
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

    console.log(this.start, this.end);

    return (
      <div>
        {!this.state.isLoaded ? (
          <Loading />
        ) : (
          this.state.stories
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

StoryListWrapper.propTypes = {
  storyType: PropTypes.string
};

export default StoryListWrapper;
