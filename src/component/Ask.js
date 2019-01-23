import React, { Component } from 'react';

import Loading from './Loading';
import PaginationFooter from './Pagination';
import StoryListItem from './story/StoryListItem';

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
    return (
      <div>
        {!this.state.showStoryIdList.length ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map(storyId => {
            return <StoryListItem key={storyId} id={storyId} />;
          })
        )}

        <PaginationFooter />
      </div>
    );
  }
}

export default Ask;
