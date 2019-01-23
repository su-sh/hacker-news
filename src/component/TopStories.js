import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import { getPosition, getShowStoryList } from '../utils/utils';

import '.././App.css';
import PaginationFooter from './Pagination';

/**
 *
 *
 * @class TopStories
 * @extends {Component}
 */
class TopStories extends Component {

  /**
   * Creates an instance of TopStories.
   *
   * @memberof TopStories
   */
  constructor() {
    super();
    this.state = {
      allStoryIdList: [],
      showStoryIdList: [],
      currentPageNumber: 0
    };
  }

  /**
   *
   *
   * @memberof TopStories
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.TOP_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: getShowStoryList(newArray, 0)
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    return (
      <div>
        {!this.state.showStoryIdList.length ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map((storyId, index) => {
            return (
              <StoryListItem
                key={storyId}
                position={getPosition(index, this.state.currentPageNumber)}
                id={storyId}
              />
            );
          })
        )}

        <button
          disabled={this.isDisabledLeft(this.state.currentPageNumber)}
          onClick={() => {
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
                    this.state.allStoryIdList,
                    this.state.currentPageNumber
                  )
                });
              }
            );
          }}
        >
          Previous
        </button>

        <button
          disabled={this.isDisabledRight(
            this.currentPageNumber,
            this.state.allStoryIdList.length
          )}
          onClick={() => {
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
                    this.state.allStoryIdList,
                    this.state.currentPageNumber
                  )
                });
              }
            );
          }}
        >
          Next
        </button>

        <PaginationFooter />
      </div>
    );
  }

  /**
   *
   *
   * @param {*} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledLeft = currentPageNumber => {
    if (currentPageNumber === 0) {
      // console.log(currentPageNumber);

      return true;
    } else {
      // console.log(currentPageNumber);

      return false;
    }
  };

  /**
   *
   *
   * @param {number} currentPageNumber
   * @param {number} allStoryListLength
   * @returns {boolean}
   * */
  isDisabledRight = (currentPageNumber, allStoryListLength) => {
    if ((currentPageNumber + 1) * 30 >= allStoryListLength) {
      return true;
    } else {
      return false;
    }
  };

}

export default TopStories;
