import React, { Component } from 'react';

import Loading from './Loading';

import StoryListItem from './story/StoryListItem';

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
      showStoryIdList: [123, 654, 3, 21, 654]
    };
  }

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
          this.state.showStoryIdList.map(storyId => {
            return <StoryListItem key={storyId} id={storyId} />;
          })
        )}
      </div>
    );
  }

}

export default TopStories;
