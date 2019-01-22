import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';
import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import { getPosition } from '../utils/utils';

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
      currentPage: 0,
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
      <div>
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
      </div>
    );
  }

}

export default Newest;
