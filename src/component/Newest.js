import React, { Component } from 'react';
import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import Loading from './Loading';
import StoryListItem from './story/StoryListItem';

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
        Newest
        <div>
          {!this.state.showStoryIdList.length ? (
            <Loading />
          ) : (
            this.state.showStoryIdList.map(storyId => {
              return <StoryListItem key={storyId} id={storyId} />;
            })
          )}
        </div>
      </div>
    );
  }

}

export default Newest;
