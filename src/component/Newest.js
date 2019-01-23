import React, { Component } from 'react';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import StoryListWrapper from './story/StoryListWrapper';

import '../App.css';

/**
 *
 *
 * @class Newest
 * @extends {Component}
 */
class Newest extends Component {

  /**
   * Creates an instance of Newest.
   *
   * @memberof Newest
   */
  constructor() {
    super();
    this.state = {
      currentPageNumber: 0,
      allStoriesIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.NEW_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: newArray.slice(0, 30)
    });
  };

  /**
   *
   *
   * @returns {Object}
   * @memberof Newest
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

export default Newest;
