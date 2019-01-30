import React, { Component } from 'react';

import StoryListWrapper from './story/StoryListWrapper';
import '.././App.css';

/**
 * This class renders list of top stories .
 *
 * @class TopStories
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
      showStoryIdList: [123, 654, 3, 21, 654],
      currentPageNumber: 0
    };
  }

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    return <StoryListWrapper showStoryIdList={this.state.showStoryIdList} />;
  }

}

export default TopStories;
