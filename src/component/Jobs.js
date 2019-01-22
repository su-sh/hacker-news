import React, { Component } from 'react';

import Loading from './Loading';
import JobsListItem from './JobsListItem';

import { getStoriesIndexArray } from '../api/api';
import { STORY_TYPE } from '../api/api';
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
