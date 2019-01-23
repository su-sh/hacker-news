import React, { Component } from 'react';

import { getStoriesIndexArray } from '../api/api';
import { STORY_TYPE } from '../api/api';
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
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.JOB_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: newArray.slice(0, 30)
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
