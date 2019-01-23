import React, { Component } from 'react';

import StoryListWrapper from './story/StoryListWrapper';

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
      showStoryIdList: [123, 1231]
    };
  }

  /**
   *
   *
   * @memberof Ask
   */
  componentDidMount = () => {
    this.setState({
      allStoryIdList: [],
      showStoryIdList: [123, 1234]
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Ask
   */
  render() {
    return <StoryListWrapper showStoryIdList={this.state.showStoryIdList} />;
  }

}

export default Ask;
