import React, { Component } from 'react';

import StoryListWrapper from './story/StoryListWrapper';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
/**
 *
 *
 * @class Ask
 * @extends {Component}
 */
class Ask extends Component {
  /**
   * Creates an instance of Ask.
   *
   * @memberof Ask
   */
  constructor() {
    super();
    this.state = {
      currentPageNumber: 0,
      allStoryIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof Ask
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.ASK_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: newArray.slice(0, 30)
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Ask
   */
  render() {
    return (
      <StoryListWrapper
        currentPageNumber={this.state.currentPageNumber}
        showStoryIdList={this.state.showStoryIdList}
      />
    );
  }
}

export default Ask;
