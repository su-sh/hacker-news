import React, { Component } from 'react';

import StoryListWrapper from './story/StoryListWrapper';

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
      showStoryIdList: [123, 12, 54, 123, 12, 54, 123, 12, 54]
    });
  };

  /**
   *
   *
   * @returns {Object}
   * @memberof Newest
   */
  render() {
    return <StoryListWrapper showStoryIdList={this.state.showStoryIdList} />;
  }

}

export default Newest;
