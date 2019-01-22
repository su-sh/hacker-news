import React, { Component } from 'react';

import Loading from './Loading';
import JobsListItem from './JobListItem';

/**
 *
 *
 * @class Jobs
 * @extends {Component}
 */
class Jobs extends Component {
  /**
   * Creates an instance of Jobs.
   *
   * @memberof Jobs
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
   * @memberof Jobs
   */
  componentDidMount = () => {
    this.setState({
      allStoryIdList: [],
      showStoryIdList: [123, 123]
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Jobs
   */
  render() {
    return (
      <div>
        {!this.state.showStoryIdList.length ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map(storyId => {
            return <JobsListItem key={storyId} id={storyId} />;
          })
        )}
      </div>
    );
  }
}

export default Jobs;
