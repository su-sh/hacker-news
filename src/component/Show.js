import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';

import { getPosition } from '../utils/utils';
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
      <div>
        {!this.state.showStoryIdList.length ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map(storyId => {
            return (
              <StoryListItem
                key={storyId}
                position={getPosition(storyId, this.state.allStoryIdList)}
                id={storyId}
              />
            );
          })
        )}
      </div>
    );
  }

}

export default Show;
