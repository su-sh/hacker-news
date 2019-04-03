import React from 'react';

import { STORY_TYPE } from '../constants/api';

import StoryListWrapper from '../component/story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof Jobs
 */
const Jobs = () => {
  return <StoryListWrapper storyType={STORY_TYPE.JOB_STORIES} />;
};

export default Jobs;
