import React from 'react';

import { STORY_TYPE } from '../constants/api';
import StoryListWrapper from '../component/story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof TopStories
 */
const TopStories = () => {
  return <StoryListWrapper storyType={STORY_TYPE.TOP_STORIES} />;
};

export default TopStories;
