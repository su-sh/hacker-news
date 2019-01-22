import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';

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
      allStoryIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof Show
   */
  componentDidMount = () => {
    this.setState({
      allStoryIdList: [],
      showStoryIdList: [123, 45, 45]
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

export default Show;
