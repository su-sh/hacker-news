import React, { Component } from 'react';

import StoryListWrapper from './story/StoryListWrapper';

import { getStoriesIndexArray } from '../api/api';

import { STORY_TYPE } from '../api/api';

/**
 *
 *
 * @class Show
 * @extends {Component}
 */
class Show extends Component {

  /**
   * Creates an instance of Show.
   *
   * @memberof Show
   */
  constructor() {
    super();
    this.state = {
      currentPageNumber: undefined,
      allStoryIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof Show
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.SHOW_STORIES);

    this.setState({
      currentPageNumber: 0,
      allStoryIdList: newArray,
      showStoryIdList: newArray.slice(0, 30)
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Show
   */
  render() {
    return (
      <StoryListWrapper
        showStoryIdList={this.state.showStoryIdList}
        currentPageNumber={this.state.currentPageNumber}
      />
    );
  }

}

export default Show;
