import React from 'react';

import { STORY_TYPE } from '../api/api';
import StoryListWrapper from './story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof Newest
 */
const Newest = () => {
  return <StoryListWrapper storyType={STORY_TYPE.NEW_STORIES} />;
};

export default Newest;
