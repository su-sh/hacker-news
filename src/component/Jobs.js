import React, { Component } from 'react';

import JobListWrapper from './jobs/JobsListWrapper';
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
    return <JobListWrapper showStoryIdList={this.state.showStoryIdList} />;
  }
}

export default Jobs;
