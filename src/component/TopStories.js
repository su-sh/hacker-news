import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as api from '../api/api';

import StoryListItem from './story/StoryListItem';

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
      currentPageNo: 0,
      allStoryIdList: [],
      showStoryIdList: [123123, 123124]
    };
  }

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    const storiesList = this.state.showStoryIdList.length ? (
      this.state.showStoryIdList.map(storyId => {
        return <StoryListItem key={storyId} id={storyId} />;
      })
    ) : (
      <div className="center">Loading</div>
    );

    return (
      <div>
        TopStories
        {storiesList}
      </div>
    );
  }

}

export default TopStories;
