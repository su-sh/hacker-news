import React from 'react';

import { STORY_TYPE } from '../constants/api';
import StoryListWrapper from './story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof Ask
 */
const Ask = () => {
  return <StoryListWrapper storyType={STORY_TYPE.ASK_STORIES} />;
};

export default Ask;
