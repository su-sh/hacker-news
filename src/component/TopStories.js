import React, { Component } from 'react';

import Loading from './Loading';
import * as api from '../api/api';
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
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof TopStories
   */
  componentDidMount = async () => {
    const newArray = await api.getStoriesIndexArray();

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: newArray.slice(0, 30)
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
          this.state.showStoryIdList.map(storyId => {
            return <StoryListItem key={storyId} id={storyId} />;
          })
        )}
      </div>
    );
  }

}

export default TopStories;
