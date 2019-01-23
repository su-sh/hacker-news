import React from 'react';

import { STORY_TYPE } from '../api/api';
import StoryListWrapper from './story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof TopStories
 */
const TopStories = () => {
  return <StoryListWrapper storyType={STORY_TYPE.TOP_STORIES} />;
};

export default TopStories;
