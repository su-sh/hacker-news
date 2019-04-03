import React from 'react';

import { STORY_TYPE } from '../constants/api';
import StoryListWrapper from '../component/story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof Newest
 */
const Newest = () => {
  return <StoryListWrapper storyType={STORY_TYPE.NEW_STORIES} />;
};

export default Newest;
