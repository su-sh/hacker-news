import React, { Component } from 'react';

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
  componentDidMount = () => {
    this.setState({
      allStoryIdList: [],
      showStoryIdList: [123, 12, 54]
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
              return <StoryListItem key={storyId} id={storyId} />;
            })
          )}
        </div>
      </div>
    );
  }

}

export default Newest;
