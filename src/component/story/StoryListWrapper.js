import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchStoriesIndexArray } from '../../api/api';
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
      isLoaded: false
    };
  }

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    const newArray = await fetchStoriesIndexArray(this.props.storyType);

    this.setState({
      allStoriesIdList: newArray,
      showStoryIdList: newArray.slice(0, 30),

      isLoaded: true
    });
  };

  componentWillUnmount = () => {
    // console.log();
    this.shouldLoad = false;
    // this.promise.reject();
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
    return (
      <div>
        {
          !this.state.showStoryIdList ? (
            <Loading />
          ) : (
            this.state.showStoryIdList.map((storyId, index) => {
              return (
                <StoryListItem
                  position={getPosition(index, this.state.currentPageNumber)}
                  key={storyId}
                  id={storyId}
                />
              );
            })
          )
        }
        {
          this.state.allStoriesIdList ? (
            <PaginationFooter
              currentPageNumber={this.state.currentPageNumber}
              handlePreviousPaginationClick={this.handlePreviousPaginationClick}
              handleNextPaginationClick={this.handleNextPaginationClick}
              isDisabledLeft={this.isDisabledLeft}
              isDisabledRight={this.isDisabledRight}
            />
          ) : (
            ''
          )
        }
      </div>
    );
  }

}

StoryListWrapper.propTypes = {
  storyType: PropTypes.string
};

export default StoryListWrapper;
