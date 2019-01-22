import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';
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

export default Ask;
